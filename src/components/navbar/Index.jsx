import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-400 py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Logo</h1>
            <ul>
              <li className="flex gap-6 justify-end">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/data">Data</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
