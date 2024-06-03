import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
        <p>Created by:</p>
        <table className="creators-table">
          <tbody>
            <tr>
              <td>Priya</td>
              <td>
                <a href="http://priyawebcodes.com">
                  <FontAwesomeIcon icon={faBriefcase} className="icon-large" />
                </a>
                <a href="https://www.linkedin.com/in/priya-tyagi-600737249/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon-large" />
                </a>
                <a href="https://github.com/PriyaTyagi19" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon-large" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Simran</td>
              <td>
                <a href="http://simrancodes.com">
                  <FontAwesomeIcon icon={faBriefcase} className="icon-large" />
                </a>
                <a href="https://www.linkedin.com/in/simranwarraich/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon-large" />
                </a>
                <a href="https://github.com/Simran1997161" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon-large" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Dilraj</td>
              <td>
                <a href="http://dilrajrandhawa.com">
                  <FontAwesomeIcon icon={faBriefcase} className="icon-large" />
                </a>
                <a href="https://www.linkedin.com/in/dilrajr/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon-large" />
                </a>
                <a href="https://github.com/djrandhawa15" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon-large" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Mudarres</td>
              <td>
                <a href="http://mudarresamin.com">
                  <FontAwesomeIcon icon={faBriefcase} className="icon-large" />
                </a>
                <a href="https://www.linkedin.com/in/mudarres-amin-090784194/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon-large" />
                </a>
                <a href="https://github.com/mamin24" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon-large" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <div className="tmdb-container">
          <NavLink to='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
            <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
          </NavLink>
        </div>
      </article>
    </section>
  );
}

export default About;
