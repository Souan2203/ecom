import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiCart, BiMenu, BiX } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Gen <span className="text-blue-500">Z's</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </li>

           
            <li>
              <a
                href="#cata"
                className="hover:text-blue-500 transition-colors"
              >
                Categories
              </a>
            </li>

            <li>
               <a
                href="#arr"
                className="hover:text-blue-500 transition-colors"
              >
                New Arrivals
              </a>
            </li>
          </ul>

          {/* Desktop Search */}
         

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* User */}
            

            

            {/* Desktop Sign In */}
           

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            

            {/* Mobile Links */}
            <ul className="flex flex-col gap-1 font-medium text-gray-700">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

             

              <li>
                <a
                  href="#cata"
                  onClick={handleLinkClick}
                  className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-500"
                >
                  Categories
                </a>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  onClick={handleLinkClick}
                  className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-500"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>

            {/* Mobile Sign In */}
            <div className="pt-2">
              
            </div>
          </div>
        </div>
      )}
    </nav>
    <Hero/>
    <Body/>
    <Footer/>
    </>
  );
};

export default Navbar;
