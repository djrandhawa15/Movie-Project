import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

// Nav component rendering navigation links for Favorites and About pages
const Nav = () => {
  return (
    <nav className="main-nav">
      <Link to="/fav">Favourites</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
