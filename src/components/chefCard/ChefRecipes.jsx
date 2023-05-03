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
  console.log(recipes.length);
  return (
    <div>
      <div className="title-body">
        <h1 className="title">{chef_name}</h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div>
        {/* {recipes.map((recipe, i) => (
          <ChefRecipeCards key={i} recipe={recipe} />
        ))} */}
        {recipes.map((recipe, i) => (
          <ChefRecipeCards key={i} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
