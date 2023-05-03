import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="title-body mt-4">
        <h1 className="title">Register Here</h1>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <form className="w-full max-w-sm mx-auto my-10">
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-lime-500 "
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div> */}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-lime-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          {/* {emailError && <span className="text-red-500"></span>} */}
        </div>
        <div className="mb-6">
          <label className="block font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-lime-500"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          {/* {passwordError && <span className="text-red-500"></span>} */}
        </div>
        {/* {errorMessage && <span className="text-red-500"></span>} */}
        <p className="mb-4">
          Already have an account?{" "}
          <Link to="/login" state={location.state} className="text-lime-600">
            Please Login
          </Link>
        </p>
        <button className="btn w-full" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
