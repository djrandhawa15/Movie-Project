import React from 'react';
import { NavLink } from 'react-router-dom';
import tmdbLogo from '../assets/tmdb.svg';
import '../styles/about.css';

const About = () => {
  return (
    <div>
      <h6>This product uses the TMDb API but is not endorsed or certified by TMDb.</h6>
      <p>CINE HUB is an innovative movie database project designed to provide users with a comprehensive and immersive movie experience. CINE HUB offers a vast collection of information about movies, TV shows, actors, and more.</p>
      <NavLink to='https://www.themoviedb.org/'>
        <img className='tmdb' src={tmdbLogo} alt="tmdbLogo" />
      </NavLink>
    </div>
  )
}


export default About;