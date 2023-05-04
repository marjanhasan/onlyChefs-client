import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-container">
      <div className="title-body mt-4">
        <h1 className="title">About Us</h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row h-full">
        {/* left side  */}
        {/* Lottie Animation */}
        <div className="lg:w-1/2 ">
          <div className="w-full lg:w-4/5">
            <Player
              autoplay
              speed={1.5}
              loop
              src="/chef-dancing.json"
              className="rounded-lg"
            ></Player>
          </div>
        </div>
        {/* right side  */}
        <div className="mb-10 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans lg:text-5xl font-bold tracking-tight text-4xl sm:text-4xl sm:leading-none">
              We take care of your Foodie life
            </h2>
            <p className="text-base text-gray-500 md:text-lg text-justify">
              Welcome to OnlyChef, your ultimate destination for exploring the
              world's best cuisine and discovering renowned celebrity chefs and
              their signature recipes. Whether you're an aspiring home cook or a
              seasoned culinary enthusiast, OnlyChef is your go-to source for
              mouth-watering dishes from all corners of the globe. Browse our
              extensive collection of recipes by country and uncover the secrets
              behind some of the world's most popular dishes. Plus, get up close
              and personal with the world's most acclaimed chefs, as they share
              their favorite recipes and cooking tips exclusively on OnlyChef.
              Join our community of foodies today and start cooking like a pro
              with OnlyChef.
            </p>
            <Link to="/register" className="btn md:w-auto md:mr-4 mt-6">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
