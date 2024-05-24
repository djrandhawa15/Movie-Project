import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/movieCard.css";
import FavoriteIcon from './FavoriteIcon';
import { addFavorite, removeFavorite } from "../features/favSlice";
import { useDispatch } from "react-redux";



const MovieCard = ({ movie, isFav }) => {
  const [showOverview, setShowOverview] = useState(true);

  const dispatch = useDispatch();


    function handleFavClick(addToFav, obj){
         console.log("Toggling favorite for movieId:", movie.id);
        console.log("Current favorites:");
        if(addToFav === true){
            dispatch( addFavorite(obj));
        }else{
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

         
          {showOverview && (
            <p className="overview">{getShortenedOverview()}...</p>
          )}
          {isFav ?
            <FavoriteIcon movie={movie} remove={true} handleFavClick={handleFavClick} /> :
            <FavoriteIcon movie={movie} handleFavClick={handleFavClick} remove={false} />
        }
          <button className="btn-hover">
            {/* this button is for desktop hover */}
            <NavLink to={`/single/${movie.id}`}>More Info</NavLink>
          </button>
        </div>

        <h6>{movie.title}</h6>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>

        
        <button className="more-info">
          {/* this button is for mobile view */}
          <NavLink to={`/single/${movie.id}`}>More Info</NavLink>
        </button>
     
    </section>
  );
};

export default MovieCard;
