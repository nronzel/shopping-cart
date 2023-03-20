import React from "react";
import { Outlet } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <h1>Hello from Cart</h1>
      <Outlet />
    </div>
  );
}
