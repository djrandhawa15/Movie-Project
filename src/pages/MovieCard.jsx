import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Ratings from './Ratings';
import '../styles/movieCard.css';
import favicon from '../assets/fav-icon.svg'; 

const MovieCard = ({ movie }) => {
  const [showOverview, setShowOverview] = useState(true);

  const handleMouseEnter = () => {
    setShowOverview(true);
  };

  const handleMouseLeave = () => {
    setShowOverview(false);
  };

  const getShortenedOverview = () => {
    const words = movie.overview.split(' ');
    return words.slice(0, 20).join(' ');
  };

  return (
    <section className="movie-card">
      <div>
        <div className='hover-overview'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <img id='favorite-color' src={favicon} alt="fav-icon" />
          {showOverview && <p className="overview">{getShortenedOverview()}...</p>}
        </div>

        <h6>{movie.title}</h6>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <button className='more-info'>
          <NavLink to={`/Single/${movie.id}`}>
            More Info
          </NavLink>
        </button>
        <Ratings />
      </div>
    </section>
  );
}

export default MovieCard;
