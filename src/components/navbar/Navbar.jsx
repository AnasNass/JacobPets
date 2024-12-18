import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 fixed top-0 w-full z-50 flex justify-center shadow-lg">
      <div className="flex space-x-8 items-center">
        <NavbarItem label="Home" to="/" />
        <NavbarItem label="Products" to="/products" />
        <NavbarItem label="Rescue" to="/rescue" />
        <NavbarItem label="Login" to="/login" />
      </div>
    </nav>
  );
};

export default Navbar;
