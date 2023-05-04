import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import ErrorPage from "./components/error/ErrorPage";
import Home from "./components/home/Home";
import Blog from "./components/navRoutes/Blog";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import AuthProviders from "./providers/AuthProviders";
import Login from "./components/login/login";
import Register from "./components/login/Register";
import FavChef from "./components/navRoutes/FavChef";
import About from "./components/navRoutes/About";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ChefRecipes from "./components/chefCard/ChefRecipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://only-chefs-server-marjanhasan.vercel.app/"),
      },
      {
        path: "/chef/:id",
        element: <ChefRecipes />,
        loader: ({ params }) =>
          fetch(
            `https://only-chefs-server-marjanhasan.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "favorite-chef",
        element: (
          <PrivateRoutes>
            <FavChef />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://only-chefs-server-marjanhasan.vercel.app/"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "loader",
        element: <LoadingSpinner />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router} />
    <ToastContainer />
  </AuthProviders>
);
