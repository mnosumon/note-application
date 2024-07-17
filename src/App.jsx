import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./components/routeLayout/RouteLayout";
import Home from "./pages/home/Index";
import User from "./pages/user/Index";
import Contact from "./pages/contact/Index";
import Data from "./pages/data/Data";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
