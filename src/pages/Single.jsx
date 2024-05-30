import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast';
import FavoriteIcon from '../components/FavoriteIcon';
import Ratings from '../components/Ratings';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favSlice';
import isFav from '../utilities/isFav';
import '../styles/single.css'
import '../styles/movieCard.css'
const apiKey = import.meta.env.VITE_API_KEY;

const Single = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  let { id } = useParams();

  const favs = useSelector((state) => state.favorites.items);
  
    // Dispatch to add/ remove fav movies
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
   
   if(addToFav === true){
       dispatch( addFavorite(obj));
   }else{
       dispatch(removeFavorite(obj));
   }
}

// Check if the movie is in favorites
const isFavorite= isFav(favs, true, singleMovie?.id);


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
  }, [id]);

  return (
    <div className='single-page' >
      
        {singleMovie && (
          <section className='single-container'>
            <figure className='image-fav-icon'>
            <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`} alt={singleMovie.title} />
        
            {isFavorite ?
            (<FavoriteIcon movie={singleMovie} remove={true} handleFavClick={handleFavClick} /> ):
            (<FavoriteIcon movie={singleMovie} handleFavClick={handleFavClick} remove={false}/>)
        }
            <Ratings rating={singleMovie.vote_average} />
        </figure>
            <article className='movie-details'> 
              <h2>{singleMovie.title}</h2>
              <p>Release Date: {singleMovie.release_date}</p>
              <p>Overview: {singleMovie.overview}</p>
             
              <Cast  movieId={id}/>
            </article>
          </section>
        )}
      
    </div>
  );
}

export default Single;
