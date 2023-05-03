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
              We take care of your healthy life
            </h2>
            <p className="text-base text-gray-500 md:text-lg text-justify">
              Our Hospital Management Website is your gateway to top-notch
              healthcare services. With a compassionate and experienced team, we
              are committed to providing innovative solutions that prioritize
              your health and well-being.Trust us to be your partner in health
              and start your journey towards optimal wellness today.
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
