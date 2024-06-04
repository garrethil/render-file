import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-headerBG shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a className="text-lg font-normal" href="/">
          Render File
        </a>
        <button
          className="text-gray-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zm0 5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75z"
            />
          </svg>
        </button>
        <div
          className={`md:flex items-center w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbarNav"
        >
          <ul className="md:flex md:space-x-4">
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-gray-800 hover:text-green-600"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-gray-800 hover:text-gray-600"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="block py-2 px-4 text-gray-800 hover:text-gray-600"
                to="/vault"
              >
                Vault
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
