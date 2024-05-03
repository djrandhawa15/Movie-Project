// Nav
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {

  
    return (
        <nav className="main-nav">
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Fav">Favourites</NavLink>
            {/* <ul>
                <li> <NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Fav">Favourites</NavLink></li>
            </ul> */}
           
            
        </nav>
    );

};

export default Nav;
