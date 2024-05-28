import React from 'react';
import '../styles/hero.css';

const Hero = ( {movie} ) => {

    if(!movie) {
        return null;
    }

    const { title, backdrop_path, poster_path, overview, release_date, vote_average } = movie;
    const imageUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : `https://image.tmdb.org/t/p/original${poster_path}`;

    const truncateOverview = (text, limit) => {
      const words = text.split(' ');
      if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
      }
      return text;
    };
    return (
        <div className="hero">
          <img src={imageUrl} alt={title} className="hero-image" />
          <div className="hero-details">
            <h2>{title}</h2>
            <p>Release Date: {release_date}</p>
            <p>Overview: {truncateOverview(overview, 15)}</p>
            <p>Rating: {vote_average}</p>
          </div>
        </div>
      );
    };
    


export default Hero;