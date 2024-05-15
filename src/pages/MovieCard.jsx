import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
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
        
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='favorite-color'><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
         {showOverview && <p className="overview">{getShortenedOverview()}...</p>}
         <button className="btn-hover">
         <NavLink to={`/single/${movie.id}`}>
            More Info
            </NavLink>
            </button>
        </div>

  
      <h6>{movie.title}</h6>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <button className='more-info'>
      <NavLink to={`/single/${movie.id}`}>
        More Info
        </NavLink>
        </button>
      
      </div>
    </section>
  );
}

export default MovieCard;
