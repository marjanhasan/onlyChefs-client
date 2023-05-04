import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFromDb } from "../../utilities/fakedb";
import FavChefCard from "./FavChefCard";
const FavChef = () => {
  const favData = useLoaderData();
  const { chefs } = favData;

  let locals = getFromDb();
  const similarData = locals.map((item) => {
    const { chef, recp } = item;
    const chefData = chefs.find((c) => c.id == chef);
    const recipe = chefData.recipes.find((r) => r.id === recp);
    return { chefData, recipe };
  });

  return (
    <div className="mt-12">
      <div className="title-body">
        <h1 className="title">Favorite Recipes</h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div>
        {similarData.map((singleData, i) => (
          <FavChefCard key={i} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default FavChef;
