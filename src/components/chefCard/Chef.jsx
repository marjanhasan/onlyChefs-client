import React from "react";
import ChefCards from "./ChefCards";

const Chef = ({ chefs }) => {
  return (
    <div className="my-12 my-container">
      <div className="title-body">
        <h1 className="title">Popular Chefs</h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <ChefCards key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
