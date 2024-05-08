import React from 'react';
import '../styles/movieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <section className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h6>{movie.title}</h6>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      {/* <p>Overview: {movie.overview}</p> */}
    </section>
  );
}

export default MovieCard;