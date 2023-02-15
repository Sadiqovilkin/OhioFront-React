import React from "react";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Product from "./Components/Pages/Product/Product";

const Router = [
  {
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },
  {
    path: "/blog",
    exact: "true",
    component: <Blog />,
    fallback: <Blog />,
  },
  {
    path: "/contact",
    exact: "true",
    component: <Contact />,
    fallback: <Contact />,
  },
  {
    path: "/portfolio",
    exact: "true",
    component: <Portfolio />,
    fallback: <Portfolio />,
  },
  {
    path: "/product",
    exact: "true",
    component: <Product />,
    fallback: <Product />,
  },
  {
    path: "*",
    exact: "true",
    component: <Error />,
    fallback: <Error />,
  },
];

export default Router;
