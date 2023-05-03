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
