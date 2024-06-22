import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-black text-white py-2 text-lg items-center justify-center">
      <Link to="/" className="mr-4 bg-yellow-500 rounded-md border-white p-2">
        Home
      </Link>
      <Link
        to="/about"
        className="mr-4 bg-yellow-500 rounded-md border-white p-2"
      >
        About
      </Link>
      <Link
        to="/products"
        className="mr-4 bg-yellow-500 rounded-md border-white p-2"
      >
        Products
      </Link>
    </div>
  );
};

export default Navbar;
