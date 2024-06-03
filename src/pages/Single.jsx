import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "../components/Cast";
import FavoriteIcon from "../components/FavoriteIcon";
import Ratings from "../components/Ratings";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favSlice";
import isFav from "../utilities/isFav";
import "../styles/single.css";
import "../styles/movieCard.css";

// API Key for fetching movie data
const apiKey = import.meta.env.VITE_API_KEY;

// Single component responsible for displaying details of a single movie
const Single = () => {
  // State to store details of the single movie
  const [singleMovie, setSingleMovie] = useState(null);
  // Get movie ID from URL parameters
  let { id } = useParams();

  // Redux state for favorites
  const favs = useSelector((state) => state.favorites.items);

  // Redux dispatch hook
  const dispatch = useDispatch();

  // Function to handle favorite button clic
  function handleFavClick(addToFav, obj) {
    // Dispatch addFavorite action if addToFav is true, otherwise removeFavorite action
    if (addToFav === true) {
      dispatch(addFavorite(obj));
    } else {
      dispatch(removeFavorite(obj));
    }
  }

  // Check if the movie is in favorites
  const isFavorite = isFav(favs, true, singleMovie?.id);

  useEffect(() => {
    // Fetch movie data using the movie ID from an API
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
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
    <div className="single-page">
      {/* Render movie details if singleMovie is available */}
      {singleMovie && (
        <section className="single-container">
          {/* Display movie poster, favorite icon, and ratings */}
          <figure className="image-fav-icon">
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
              alt={singleMovie.title}
            />
            <FavoriteIcon
              movie={singleMovie}
              handleFavClick={handleFavClick}
              remove={isFavorite}
            />
            <Ratings rating={singleMovie.vote_average} />
          </figure>
          {/* Display movie details */}
          <article className="movie-details">
            <h2>{singleMovie.title}</h2>
            <p>Release Date: {singleMovie.release_date}</p>
            <p>Overview: {singleMovie.overview}</p>
            {/* Display cast for the movie */}
            <Cast movieId={id} />
          </article>
        </section>
      )}
    </div>
  );
};

export default Single;
