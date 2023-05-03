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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://only-chefs-server.vercel.app/"),
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
        element: <FavChef />,
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
  </AuthProviders>
);
