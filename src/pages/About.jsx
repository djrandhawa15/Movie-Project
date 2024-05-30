import React from 'react';
import { NavLink } from 'react-router-dom';
import tmdbLogo from '../assets/tmdb.svg';
import sidephoto from '../assets/pexels-bylukemiller-19068901.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="side-photo">
        <img src={sidephoto} alt="Photo of Orpheum theatre in Vancouver" />
      </div>
      <div className="text-and-logo-container">
        <div className="text-content">
          <h6>This product uses the TMDb API but is not endorsed or certified by TMDb.</h6>
          <p>CINE HUB is an innovative movie database project designed to provide users with a comprehensive and immersive movie experience. CINE HUB offers a vast collection of information about movies, TV shows, actors, and more.</p>
          <br />
          <p>Created by: 
            <ul>
              <li>Priya - <a href="http://priyawebcodes.com">Priya's Website</a></li>
              <li>Simran - <a href="http://simrancodes.com">Simran's Website</a></li>
              <li>Dilraj - <a href="http://dilrajrandhawa.com">Dilraj's Website</a></li>
              <li>Mudarres - <a href="http://xyz.com">Mudarres's Website</a></li>
              </ul>
              </p>
        </div>
        <div className="tmdb-container">
          <NavLink to='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
            <img className='tmdb' src={tmdbLogo} alt="TMDb Logo" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default About;
