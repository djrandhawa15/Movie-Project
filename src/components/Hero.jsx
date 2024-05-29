import React from 'react';
import '../styles/hero.css';

const Hero = ( {movie} ) => {

    if(!movie) {
        return null;
    }

    const { title, backdrop_path, poster_path, overview, release_date, vote_average } = movie;
    const imageUrl = backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : `https://image.tmdb.org/t/p/original${poster_path}`;

    
    return (
        <section className="hero">
          <img src={imageUrl} alt={title} className="hero-image" />
          <div className="hero-details">
            <h2>{title}</h2>
            <p>Release Date: {release_date}</p>
            <article className='noOverview-mobile'>
            <p>Overview: {overview}</p>
            </article>
            
            <p>Rating: {vote_average}</p>
          </div>
        </section>
      );
    };
    


export default Hero;