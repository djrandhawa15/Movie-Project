import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/movieLogo.svg'
import Nav from '../components/Nav';
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/home'>
        <img src={logo} alt="Logo" />
      </NavLink>
        <Nav/>
        </div>
  )
}

export default Header;