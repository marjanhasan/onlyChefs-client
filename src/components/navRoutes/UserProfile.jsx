import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="title-body mt-12">
        <div className="flex justify-center rounded-lg overflow-hidden">
          <img
            src={user?.photoURL}
            className="h-32 w-32 rounded-lg shadow-lg"
          />
        </div>
        <h1 className="title">
          Welcome <span className="text-lime-400">{user?.displayName}</span>
        </h1>
        <span className="font-medium text-2xl mt-1">{user?.email}</span>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
