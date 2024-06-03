import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

// Nav component rendering navigation links for Favorites and About pages
const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/fav">Favourites</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;
