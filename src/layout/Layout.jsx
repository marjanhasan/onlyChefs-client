import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div
      className={`
    ${darkMode ? "dark" : "light"}`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
