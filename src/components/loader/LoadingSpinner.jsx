import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const LoadingSpinner = () => {
  return (
    <div className="h-[100vh] bg-gray-800">
      <Player
        autoplay
        speed={1.5}
        loop
        src="/loading-dots.json"
        className=""
      ></Player>
    </div>
  );
};

export default LoadingSpinner;
