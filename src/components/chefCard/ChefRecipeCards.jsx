import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { addToDb, getFromDb } from "../../utilities/fakedb";
const ChefRecipeCards = ({ recipe, id }) => {
  const [clicked, setClicked] = useState(0);
  const [disable, setdisable] = useState(false);
  const { recipe_name, recipe_img, rating, method, ingredients } = recipe;
  const applyBtn = (chefId, recpId) => {
    addToDb(chefId, recpId);
    setClicked(clicked + 1);
    setdisable(true);
    toast("Added to favorite recipes!");
  };
  useEffect(() => {
    let locals = getFromDb();
    locals.map((local) => {
      // console.log(local);
      if (id == local.chef && recipe.id == local.recp) {
        setdisable(true);
      }
    });
  }, []);
  return (
    <div className="my-container">
      <div className="flex flex-col lg:flex-row justify-center items-center mb-10 border-2 rounded-lg py-6">
        <div className="bg-gray-200 shrink-0  h-64 w-64   mx-5 lg:mx-10 rounded-lg">
          <img className="h-full w-full rounded-lg" src={recipe_img} alt="" />
        </div>
        <div className="px-6 mt-3">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl inline-block">{recipe_name}</h1>
            <button
              className="p-0"
              disabled={disable}
              onClick={() => applyBtn(id, recipe.id)}
            >
              <FaHeart
                className={`text-3xl ${
                  disable ? "text-red-300" : "text-red-500"
                }`}
              />
            </button>
          </div>
          <p className="text-base font-semibold text-gray-500 md:text-lg mb-2">
            Ratings: {rating}
          </p>
          <span className="font-medium text-lg mt-1">Ingredients:</span>
          <ol className="md:flex gap-1 text-lg text-gray-500">
            {ingredients.map((ingredient, i) => (
              <li key={i}>
                {i + 1}.{ingredient}
              </li>
            ))}
          </ol>
          <div className="my-3">
            <span className="font-medium text-lg">Method:</span>
            <p className="text-base text-gray-500 md:text-lg text-justify">
              {method}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipeCards;
