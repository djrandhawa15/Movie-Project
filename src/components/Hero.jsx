import React from 'react';
import '../styles/hero.css';

const Hero = ( {movie} ) => {

    if(!movie) {
        return null;
    }

    const { title, backdrop_path, poster_path, overview, release_date, vote_average } = movie;
    const imageUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : `https://image.tmdb.org/t/p/original${poster_path}`;
    return (
        <div className="hero">
          <img src={imageUrl} alt={title} className="hero-image" />
          <div className="hero-details">
            <h2>{title}</h2>
            <p>Release Date: {release_date}</p>
            <p>Overview: {overview}</p>
            <p>Rating: {vote_average}</p>
          </div>
        </div>
      );
    };
    


export default Hero;