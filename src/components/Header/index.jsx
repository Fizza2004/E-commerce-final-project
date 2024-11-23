import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { CardContext } from "../CardContext";

export function Header() {
  const {totalCount} = useContext(CardContext)
  return (
    
    <header className="bg-yellow-100 w-full fixed z-1">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">React Ecommerce</div>

        {/* Navigation Links */}
        <ul className="flex space-x-5">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link to="/login" className="border border-black px-4 py-1.5 rounded flex items-center hover:bg-gray-100">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2 text-lg" />
            Login
          </Link>
          <Link to="/register" className="border border-black px-4 py-1.5 rounded flex items-center hover:bg-gray-100">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-lg" />
            Register
          </Link>
          <Link to="/basket" className="border border-black px-4 py-1.5 rounded flex items-center hover:bg-gray-100">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-lg"/>
            Cart {totalCount}
          </Link>
        </div>
      </nav>
    </header>
  );
}

// Do not import Header if you're using this definition
