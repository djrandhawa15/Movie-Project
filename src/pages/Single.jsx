import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiKey = import.meta.env.VITE_API_KEY;


const Single = () => {

  const [singleMovie, setSingleMovie] = useState();
  let {id} = useParams();

  useEffect(() => {
    // Fetch movie data using the movie ID from an API
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const movieData = await response.json();
        setSingleMovie(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);


  return (
    
    <div className='container'>
      <div>
        {singleMovie && (
          <div>
             <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`} alt={singleMovie.title} />
             <h2>{singleMovie.title}</h2>
             <p>Release Date: {singleMovie.release_date}</p>
             <p>Overview: {singleMovie.overview}</p>
             <p>Rating: {singleMovie.vote_average}</p>
            </div>
        )}
     
      
      </div>
    </div>
  );
}
    


export default Single;


