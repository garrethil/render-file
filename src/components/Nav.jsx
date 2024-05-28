import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-headerBG text-white">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-semibold">Render File</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path> // X icon for close
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`absolute w-full md:relative md:flex bg-gray-800 z-20 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center justify-center w-full md:flex-row md:space-x-4">
          <Link to="/" className="hover:bg-gray-700 rounded p-2">
            Home
          </Link>
          <Link to="/about" className="hover:bg-gray-700 rounded p-2">
            About
          </Link>
          <Link to="/services" className="hover:bg-gray-700 rounded p-2">
            Services
          </Link>
          <Link to="/contact" className="hover:bg-gray-700 rounded p-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
