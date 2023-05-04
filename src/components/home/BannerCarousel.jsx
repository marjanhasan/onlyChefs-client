import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const divStyles = {
  backgroundImage: `url(
    https://soliloquywp.com/wp-content/uploads/2018/10/nb_dfs_cover.jpg
  )`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function BannerCarousel({ title, description }) {
  return (
    <div style={divStyles} className="text-center max-w-7xl mx-auto">
      <div className="bg-gradient-to-b from-transparent to-black flex items-center justify-center py-24">
        <div className="md:w-3/4 p-4">
          <h2 className="text-white text-3xl font-bold uppercase">
            <span className="break-words">ONLYCHEF:</span> <br />
            <span>Explore Global Cuisine</span>
          </h2>
          <p className="text-gray-50 text-lg mt-4 mx-auto">{description}</p>
          <div className="flex justify-center font-semibold mt-3">
            <Link to="/register">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
{
  /* <div className="relative w-full inline-block duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <img
          src="https://soliloquywp.com/wp-content/uploads/2018/10/nb_dfs_cover.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 p-4">
          <h2 className="text-white text-3xl font-bold uppercase">
            <span className="break-words">ONLYCHEF:</span> <br />
            <span>Explore Global Cuisine</span>
          </h2>
          <p className="text-gray-50 text-lg mt-4 break-words">{description}</p>
          <div className="flex justify-center font-semibold mt-3">
            <Link to="/register">
              <button className="btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div> */
}
