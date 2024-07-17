import React from "react";
import Navbar from "../navbar/Index";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RouteLayout;
