import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {

  return (
    <nav className="navbar navbar-expand-md fixed-top ">
      <a className="navbar-brand" href="/">
        <img
          className="profile_img"
          src="./img/user.jpg"
          width="60"
          height="60"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-5 ml-auto">
          <li className="nav-item mr-4">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#resume">
              Resume
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#testimonials">
              Testimonial
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#footer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
