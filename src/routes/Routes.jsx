import React from "react";
import { Routes, Route } from "react-router-dom";
import Gen9 from "../pages/Gen9/Gen9";
import Add from "../pages/add_pokemon";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Gen9 />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default AppRoutes;
