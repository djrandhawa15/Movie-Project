import React, { useState } from 'react';
import '../styles/movieCard.css';

const MovieCard = ({ movie }) => {
  const [showOverview, setShowOverview] = useState(true);

  const handleMouseEnter = () => {
    setShowOverview(true);
  };

  const handleMouseLeave = () => {
    setShowOverview(false);
  };


   // Function to get the first 20 words of the overview
   const getShortenedOverview = () => {
    const words = movie.overview.split(' ');
    return words.slice(0, 20).join(' ');
  };
  
  return (
    <section className="movie-card" 
    
    >
      <div>
        <div className='hover-overview'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
         {showOverview && <p className="overview">{getShortenedOverview()}...</p>}
        <button>More Info</button>
         
        </div>

    
      <h6>{movie.title}</h6>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      
     
      </div>
    </section>
  );
}

export default MovieCard;
