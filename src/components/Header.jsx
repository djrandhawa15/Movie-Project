import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/movieLogo.svg'
import Nav from '../components/Nav';
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
        <Nav/>
        </div>
  )
}

export default Header;