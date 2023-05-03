import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Chef from "../chefCard/Chef";
import Explore from "../explore/explore";
import Cuisines from "../cuisine/Cuisines";

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
        <p className="para w-3/5 mx-auto lg:text-center">{description}</p>
        <div className="my-6">
          <Link to="/register">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </div>
      {/* popular chefs section  */}
      <Chef chefs={chefs} />
      {/* explore chef section  */}
      <Explore />
      {/* available cuisine section  */}
      <Cuisines cuisine={cuisine} />
    </div>
  );
};

export default Home;
