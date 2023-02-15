import React from "react";

import { Routes, Route } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <Routes>
      {Router &&
        Router.map((rt, index) => (
          <Route key={index} path={rt.path} element={rt.component} />
        ))}
    </Routes>
  );
};

export default App;
