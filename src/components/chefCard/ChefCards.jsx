import React from "react";

const ChefCards = ({ chef }) => {
  const { chef_img, chef_name, years_of_experience, num_recipes, num_likes } =
    chef;
  console.log(chef);
  return (
    <div className="border-2 border-lime-400 overflow-hidden rounded-md shadow-md shadow-current">
      <div className="">
        <div className="w-full rounded-full">
          <img src={chef_img} alt="" className="w-full object-center" />
        </div>
        <div className="pl-3">
          <h2 className="font-bold text-2xl mt-5">Name: {chef_name}</h2>
          <h3 className="font-medium text-lg mt-1">
            Experience: {years_of_experience}
          </h3>
          <p className="text-base text-gray-500 md:text-lg mt-1">
            <span>Recipes: {num_recipes}</span> <br />
            <span>Likes: {num_likes}</span>
          </p>
        </div>
        <button className="py-2 font-medium transition duration-200 bg-lime-500 hover:bg-lime-700 w-full mt-3">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default ChefCards;