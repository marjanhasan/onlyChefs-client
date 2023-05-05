import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import LazyLoad from "react-lazy-load";
const ChefCards = ({ chef }) => {
  const { user } = useContext(AuthContext);
  const {
    chef_img,
    chef_name,
    years_of_experience,
    num_recipes,
    num_likes,
    id,
  } = chef;
  return (
    <div className=" overflow-hidden rounded-md shadow-md shadow-current">
      <div className="">
        <div className="w-full rounded-full">
          <LazyLoad className="w-full h-64" threshold={0.95}>
            <img src={chef_img} alt="" className="w-full h-full object-cover" />
          </LazyLoad>
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
        <Link to={user ? `../chef/${id}` : "/login"}>
          <button className="py-2 font-medium transition duration-200 bg-lime-500 hover:bg-lime-700 w-full mt-3">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCards;
