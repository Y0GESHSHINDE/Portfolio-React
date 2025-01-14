import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="text-white text-2xl font-bold">
          <h1>Yogesh Shinde</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none">
            <FaBars />
          </button>
        </div>

        <div className="hidden md:flex gap-10 text-white font-semibold">
          <Link
            to="/home"
            className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300">
            About
          </Link>
          <Link
            to="/skills"
            className="hover:text-yellow-300 transition duration-300">
            Skills
          </Link>
          <Link
            to="/experiences"
            className="hover:text-yellow-300 transition duration-300">
            Experiences
          </Link>
          <Link
            to="/project"
            className="hover:text-yellow-300 transition duration-300">
            Project
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300">
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-purple-700  to-pink-500  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}>
         
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-semibold">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-white text-3xl">
            ×
          </button>
          <Link
            to="/home"
            className="hover:text-yellow-300 transition duration-300"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
            onClick={toggleMenu}>
            About
          </Link>
          <Link
            to="/skills"
            className="hover:text-yellow-300 transition duration-300"
            onClick={toggleMenu}>
            Skills
          </Link>
          <Link
            to="/experiences"
            className="hover:text-yellow-300 transition duration-300">
            Experiences
          </Link>
          <Link
            to="/project"
            className="hover:text-yellow-300 transition duration-300"
            onClick={toggleMenu}>
            Project
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
            onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
