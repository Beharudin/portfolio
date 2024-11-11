import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="bg-blue-ribbon-900 border-b border-rose-500 text-white p-4 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between">
        {/* Navbar brand/logo */}
        <a href="/" className="flex items-center">
          <img
            className="rounded-full ml-5 w-12 h-12 object-fill"
            src="./img/user.jpg"
            alt="User"
          />
        </a>

        {/* Navbar toggler for mobile */}
        <button
          className="md:hidden"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Navbar links (hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex ml-auto">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-rose-600 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-rose-600 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-rose-600 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="hover:text-rose-600 transition duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-rose-600 transition duration-300"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="hover:text-rose-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
