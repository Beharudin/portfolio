import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { userImg } from "../../assets";

// Simplified NavLink component
const NavLink = ({ href, children, index }) => (
  <motion.li
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
  >
    <motion.a 
      href={href} 
      className="relative px-4 py-2 rounded-lg transition-all duration-300 group hover:text-rose-400"
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  </motion.li>
);

// Main Header component
function Header({ logoSrc, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-rose-500/30 text-white p-4 fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-95"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Navbar brand/logo */}
        <motion.a 
          href="/" 
          className="flex items-center group"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            className="rounded-full ml-5 w-12 h-12 object-cover border-2 border-rose-500/50 shadow-lg transition-all duration-300 hover:border-rose-500"
            src={logoSrc}
            alt="User"
          />
        </motion.a>

        {/* Navbar toggler for mobile */}
        <motion.button
          className="md:hidden relative z-50 p-2 rounded-lg bg-rose-500/20 border border-rose-500/30 hover:bg-rose-500/30 transition-all duration-300"
          type="button"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="text-rose-400"
            />
          </motion.div>
        </motion.button>

        {/* Desktop Navbar links */}
        <motion.div 
          className="hidden md:flex ml-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex space-x-2">
            {links.map((link, index) => (
              <NavLink key={index} href={link.href} index={index}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black via-gray-900 to-black border-b border-rose-500/30 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="flex flex-col space-y-2 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <motion.a
                    href={link.href}
                    className="block px-4 py-3 rounded-lg bg-gradient-to-r from-transparent to-rose-500/10 border border-rose-500/20 hover:from-rose-500/10 hover:to-rose-500/20 hover:border-rose-500/40 hover:text-rose-400 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.nav>
  )
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
