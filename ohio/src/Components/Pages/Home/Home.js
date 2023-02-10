import React from "react";
import Cart from "./Carts/Cart";
import Creators from "./Creators/Creators";
import Experience from "./Experience/Experience";
import Ideas from "./Ideas/Ideas";
import Product from "./ProductImg/Product";

import Tecnology from "./Tecnology/Tecnology";
import Award from "./Award/Award";
import Project from "./Project/Project";

const Home = () => {
  return (
    <main>
      <Creators />
      <Ideas />
      <Product />
      <Tecnology />
      <Cart />
      <Experience />
      <Award />
      <Project />
    </main>
  );
};

export default Home;
