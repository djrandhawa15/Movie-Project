import React from 'react';
import { NavLink } from 'react-router-dom';
import tmdbLogo from '../assets/tmdb.svg';
import sidephoto from '../assets/pexels-bylukemiller-19068901.jpg';
import '../styles/about.css';


const About = () => {
  return (
        <section className="about-container">
    <div className="side-photo">
        <img src={sidephoto} alt="Photo of Orpheum theatre in Vancouver" />
      </div>
     
       
         <article className='about-info'>

        
          <p>CINE HUB is an innovative movie database project designed to provide users with a comprehensive and immersive movie experience. CINE HUB offers a vast collection of information about movies, TV shows, actors, and more.</p>
          <br />
          <p>Created by: 
            <ul>
              <li>Priya - <a href="http://priyawebcodes.com">Priya's Website</a></li>
              <li>Simran - <a href="http://simrancodes.com">Simran's Website</a></li>
              <li>Dilraj - <a href="http://dilrajrandhawa.com">Dilraj's Website</a></li>
              <li>Mudarres - <a href="http://mudarresamin.com">Mudarres's Website</a></li>
              </ul>
              </p>
       
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <div className="tmdb-container">
          <NavLink to='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
            <img  src={tmdbLogo} alt="TMDb Logo" />
          </NavLink>
        </div>
        </article>
    </section>
  )
}

export default About;
