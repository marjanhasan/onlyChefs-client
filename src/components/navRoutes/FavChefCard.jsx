import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const FavChefCard = ({ singleData }) => {
  const { chefData, recipe } = singleData;
  // console.log(chefData, recipe);
  return (
    <div className="my-container">
      <div className="w-full lg:w-1/2 flex items-center mx-auto mb-10 border-2 rounded-lg py-6">
        <div className="bg-gray-200 h-32 w-32 mx-8 rounded-lg ">
          <img
            className="h-full w-full rounded-lg"
            src={recipe.recipe_img}
            alt=""
          />
        </div>
        <div className="mt-3 grow">
          <h1 className="font-bold text-3xl">{recipe.recipe_name}</h1>
          <h2 className="font-medium text-lg mt-1">
            Chef: {chefData.chef_name}
          </h2>
        </div>
        <button className=" ml-6 mx-6 p-4 bg-red-500 rounded-full">
          <FaTrashAlt className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FavChefCard;
