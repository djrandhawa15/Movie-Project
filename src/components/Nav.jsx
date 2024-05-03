// Nav
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    function blur(e){
        e.target.blur();
    }

    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Fav">Favourites</NavLink></li>
            </ul>
        </nav>
    );

};

export default Nav;
