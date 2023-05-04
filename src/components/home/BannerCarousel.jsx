import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function BannerCarousel() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold pb-6">
          <span className="break-words">
            Explore Global Cuisine & Celebrity Chefs' Recipes
          </span>
        </h1>
        <p className="para w-3/5 mx-auto lg:text-center"></p>
        <div className="my-6">
          <Link to="/register">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
