import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex justify-between">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/rescue">Rescue</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
