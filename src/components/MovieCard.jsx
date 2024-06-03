import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/movieCard.css";
import FavoriteIcon from "./FavoriteIcon";
import Ratings from "./Ratings";
import { addFavorite, removeFavorite } from "../features/favSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie, isFav }) => {
  // State to manage whether to show overview or not
  const [showOverview, setShowOverview] = useState(true);
  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to handle favorite button click
  function handleFavClick(addToFav, obj) {
    // Logging the movie ID upon favorite toggle
    console.log("Toggling favorite for movieId:", movie.id);
    console.log("Current favorites:");
    // Dispatching addFavorite action if addToFav is true, otherwise removeFavorite action
    if (addToFav === true) {
      dispatch(addFavorite(obj));
    } else {
      dispatch(removeFavorite(obj));
    }
  }

  // Function to get the first 20 words of the overview
  const getShortenedOverview = () => {
    const words = movie.overview.split(" ");
    return words.slice(0, 20).join(" ");
  };

  return (
    <section className="movie-card">
      <div className="hover-overview">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />

        {isFav ? (
          <FavoriteIcon
            movie={movie}
            remove={true}
            handleFavClick={handleFavClick}
          />
        ) : (
          <FavoriteIcon
            movie={movie}
            handleFavClick={handleFavClick}
            remove={false}
          />
        )}
        {showOverview && (
          <div>
            <p className="overview">{getShortenedOverview()}...</p>
            <Ratings rating={movie.vote_average} />
          </div>
        )}
        {/* Render full overview when showOverview is true */}
        <button className="btn-hover">
          {/* this button is for desktop hover */}
          <NavLink to={`/single/${movie.id}`}>More Info</NavLink>
        </button>
      </div>

      <h6>{movie.title}</h6>
      <p>Release Date: {movie.release_date}</p>
      {/* <p>Rating: {movie.vote_average}</p> */}

      <button className="more-info">
        {/* this button is for mobile view */}
        <NavLink to={`/single/${movie.id}`}>More Info</NavLink>
      </button>
    </section>
  );
};

export default MovieCard;
