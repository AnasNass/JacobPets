import React from "react";
import NavbarItem from "./NavbarItem";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-primary p-4 fixed top-0 w-full z-50 flex justify-center shadow-lg">
      <div className="flex space-x-8 items-center">
        <NavbarItem label="Home" to="/" />
        <NavbarItem label="Products" to="/products" />
        <NavbarItem label="Rescue" to="/rescue" />
        {user ? (
          <>
            <NavbarItem label="Get Voucher" to="/voucher" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white font-medium hover:text-accent hover:bg-white/10 rounded-lg transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          </>
        ) : (
          <NavbarItem label="Login" to="/login" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
