// Nav
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {

  
    return (
        <nav className="main-nav">
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Fav">Favourites</NavLink>
        </nav>
    );

};

export default Nav;
