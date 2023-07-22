import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-nav">
      <div className="container ">
        <Link
          className="navbar-brand logo"
          to="/"
          style={{ color: "#ff965b", fontSize: "30px" }}
        >
          Kamidancer
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " id="navLink">
            <li className="nav-item">
              <NavLink className="nav-link active nav__link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active nav__link" to="/article">
                Article
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
