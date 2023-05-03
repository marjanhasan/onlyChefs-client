import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import LoadingSpinner from "../components/loader/LoadingSpinner";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigation = useNavigation();
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
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
