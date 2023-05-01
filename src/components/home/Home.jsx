import React from "react";
import AvailableJobs from "../chefCard/AvailableJobs";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <h1>home coming</h1>
      <AvailableJobs jobs={jobs} />
    </div>
  );
};

export default Home;
