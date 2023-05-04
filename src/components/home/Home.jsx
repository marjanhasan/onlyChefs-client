import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Chef from "../chefCard/Chef";
import Cuisines from "../cuisine/Cuisines";
import BannerCarousel from "./BannerCarousel";
import LazyLoad from "react-lazy-load";
import Explore from "../explore/Explore";
const Home = () => {
  const home = useLoaderData();
  const { title, description, chefs, cuisine } = home;
  return (
    <div className="my-contaier">
      {/* banner section  */}
      <BannerCarousel title={title} description={description} />

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
