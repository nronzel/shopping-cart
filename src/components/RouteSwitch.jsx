import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Layout from "../sections/Layout";
import Cart from "../routes/Cart";
import Products from "../routes/Products";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
