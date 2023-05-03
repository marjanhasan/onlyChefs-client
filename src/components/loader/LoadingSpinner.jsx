import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-136px)]">
      <p className="text-7xl font-thin">L</p>
      <div className="w-10 h-10 rounded-full animate-spin mt-5">
        <img src="/pizza.png" alt="" />
      </div>
      <p className="text-7xl font-thin">ading....</p>
    </div>
  );
};

export default LoadingSpinner;
