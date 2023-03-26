import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Products from "../routes/Products";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
