import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="title-body mt-12">
        <h1 className="title">
          Welcome <span className="text-lime-400">{user?.displayName}</span>
        </h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
