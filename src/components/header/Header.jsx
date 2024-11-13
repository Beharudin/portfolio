import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { userImg } from "../../assets";

// Reusable NavLink component
const NavLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-rose-600 transition duration-300">
      {children}
    </a>
  </li>
);

// Main Header component
function Header({ logoSrc, links }) {
  return (
    <nav className="bg-blue-ribbon-900 border-b border-rose-500 text-white p-4 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between">
        {/* Navbar brand/logo */}
        <a href="/" className="flex items-center">
          <img
            className="rounded-full ml-5 w-12 h-12 object-fill"
            src={logoSrc}
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
            {links.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  logoSrc: userImg,
  links: [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#testimonials", label: "Testimonial" },
    { href: "#footer", label: "Contact" },
  ],
};

export default Header;
