import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const home = useLoaderData();
  const { title, description, chefs, cuisine } = home;
  return (
    <div className="my-container">
      {/* banner section  */}
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold pb-6">
          <span className="break-words">
            Explore Global Cuisine & Celebrity Chefs' Recipes
          </span>
        </h1>
        <p className="para w-3/5 mx-auto break-words">{description}</p>
        <button className="btn my-6">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
