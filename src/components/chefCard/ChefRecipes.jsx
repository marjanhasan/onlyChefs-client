import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipeCards from "./ChefRecipeCards";

const ChefRecipes = () => {
  const details = useLoaderData();
  const {
    id,
    chef_img,
    chef_name,
    years_of_experience,
    num_recipes,
    num_likes,
    bio,
    recipes,
  } = details;
  return (
    <div className="my-container">
      <div className="relative h-[70vh] w-full inline-block duration-500 overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <img src={chef_img} className="h-full w-full object-fill" />
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h2 className="text-white text-3xl font-bold uppercase">
            {chef_name}
          </h2>
          <p className="para">{bio}</p>
          <div className="para flex gap-1 font-semibold md:mt-12">
            <p>Recipes: {num_recipes}</p>
            <p>Likes: {num_likes}</p>
            <p>Experience: {years_of_experience} Years</p>
          </div>
        </div>
      </div>
      <div>
        {recipes.map((recipe, i) => (
          <ChefRecipeCards key={i} recipe={recipe} id={id} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
