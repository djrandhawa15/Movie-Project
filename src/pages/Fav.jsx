import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles/home.css';
const apiKey = import.meta.env.VITE_API_KEY;

const Fav = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${apiKey}`);
      
      if (response.ok) {
        const data = await response.json();
        setFavoriteMovies(data);
      } else {
        console.error('Failed to fetch favorite movies:', response.statusText);
                }
            } 
           catch (error) {
                console.error('Error fetching favorite movies:', error);
            }
        };

        fetchFavoriteMovies();
    }, [selectedMovie]);

    return (
      <div className="fav-page">
          <h1>Favorite Movies</h1>
          {favoriteMovies.length === 0 ? (
              <p>No favorite movies found.</p>
          ) : (
              <ul>
                  {favoriteMovies.map(movie => (
                      <li key={movie.id}>
                          <img src={movie.poster} alt={movie.title} />
                          <h2>{movie.title}</h2>
                          <p>{movie.year}</p>
                          <p>{movie.director}</p>
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
};


export default Fav;