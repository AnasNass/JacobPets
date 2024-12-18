import React from 'react';
import { Link } from "react-router-dom";

const NavbarItem = ({ label, to }) => {
    return (
        <div className="mx-4">
            <Link 
                to={to} 
                className="px-4 py-2 text-white font-medium hover:text-accent hover:bg-white/10 rounded-lg transition-all duration-300 ease-in-out"
            >
                {label}
            </Link>
        </div>
    );
};

export default NavbarItem;