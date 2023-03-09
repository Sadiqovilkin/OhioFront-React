import React from "react";
import Dark from "./DarkMode/Dark";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Dark />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
