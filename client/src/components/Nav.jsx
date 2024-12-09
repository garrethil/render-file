import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault(); // Prevent default link behavior

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      }
      setIsOpen(false); // Close the mobile menu after navigating
    };

    // If the user is on a different page, navigate to the home page first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 100); // Delay to ensure the page has navigated before scrolling
    } else {
      scrollToSection();
    }
  };

  return (
    <nav className="bg-headerBG shadow-md font-sans">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
        <div className="container flex">
          <a className="text-lg flex" href="/">
            <img
              src="/file-green.svg"
              alt="Render File Logo"
              className="w-8 h-8 mr-3"
            />
            Render File
          </a>
        </div>
        <button
          className="md:hidden"
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
          className={`absolute top-full left-0 right-0 bg-headerBG md:static md:flex items-center md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbarNav"
        >
          <ul className="md:flex md:space-x-4">
            <li className="nav-item" onClick={() => setIsOpen(!isOpen)}>
              <Link
                onClick={(e) => handleScrollToSection(e, "about")}
                className="block py-2 px-4 hover:underline"
              >
                About
              </Link>
            </li>
            <li className="nav-item" onClick={() => setIsOpen(!isOpen)}>
              <Link
                onClick={(e) => handleScrollToSection(e, "vault")}
                className="block py-2 px-4 hover:underline"
                to="#vault"
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
