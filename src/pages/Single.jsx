import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Cast from '../pages/Cast';
const apiKey = import.meta.env.VITE_API_KEY;

const Single = () => {
  const [singleMovie, setSingleMovie] = useState();
  const [cast, setCast] = useState([]);

  let { id } = useParams();
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
 
  
        
        //Fetch cast info using the movie ID
        const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
        if (!castResponse.ok) {
          throw new Error('Failed to fetch cast data');
        }
        const castData = await castResponse.json();
         //  get the first 6 actors of the movie

        setCast(castData.cast.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieData();
  }, [id]);

  return (
    <div className='container'>
      <div>
        {singleMovie && (
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`} alt={singleMovie.title} />
            <div className='movie-details'> 
              <h2>{singleMovie.title}</h2>
              <p>Release Date: {singleMovie.release_date}</p>
              <p>Overview: {singleMovie.overview}</p>
              <p>Rating: {singleMovie.vote_average}</p>
              {/* <Cast/> */}
              <div>
                <h6>Cast</h6>
                
                  {cast.map((actor) => (
                 <article>
                      <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                      <div>
                        <h6>{actor.name}</h6>
                        <p>{actor.character}</p>
                      </div>
                    </article>
                  ))}
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Single;
