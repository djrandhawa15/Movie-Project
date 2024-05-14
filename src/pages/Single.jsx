import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY;


const Single = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data using the movie ID from an API
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [id]);


  return (
    
    <div className='container'>
      <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
    </div>
  );
}
    


export default Single

