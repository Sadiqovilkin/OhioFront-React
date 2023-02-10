import React from "react";
import Cart from "./Carts/Cart";
import Creators from "./Creators/Creators";
import Ideas from "./Ideas/Ideas";
import Product from "./ProductImg/Product";
import Project from "./Projects/Project";
import Tecnology from "./Tecnology/Tecnology";

const Home = () => {
  return (
    <main>
      <Creators />
      <Ideas />
      <Product />
      <Tecnology />
      <Cart />
      <Project />
    </main>
  );
};

export default Home;
