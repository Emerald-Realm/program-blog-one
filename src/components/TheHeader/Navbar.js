import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { NavLink } from "react-router-dom";

function Navbar() {
  const globalContext = useContext(GlobalContext);

  return (
    <div className={globalContext.globalState.menuStatus ? "navbar" : "hide"}>
      <ul className="nav-list h5-normal">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="active-nav-link">
          <li className="navbar-item">Home</li>
        </NavLink>

        <NavLink
          to="/blog-list"
          exact
          className="nav-link"
          activeClassName="active-nav-link">
          <li className="navbar-item">Blogs</li>
        </NavLink>

        <NavLink
          to="/about-us"
          exact
          className="nav-link"
          activeClassName="active-nav-link">
          <li className="navbar-item">About Us</li>
        </NavLink>

        <NavLink
          to="/contact-us"
          exact
          className="nav-link"
          activeClassName="active-nav-link">
          <li className="navbar-item">Contact Us</li>
        </NavLink>

        <NavLink
          to="/login"
          exact
          className="nav-link"
          activeClassName="active-nav-link">
          <li className="navbar-item">Login</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
