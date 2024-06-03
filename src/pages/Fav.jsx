import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import isFav from "../utilities/isFav";
import { Link } from "react-router-dom";
import "../styles/fav.css";

const Fav = () => {
  // select the favorite movie from redux store
  const favs = useSelector((state) => state.favorites.items);

  return (
    <div className="fav-container">
      <section>
        {favs.length < 1 ? (
          // if there is no favorite movie, display this message and link to home page
          <div>
            <h1>No Favorite Movies</h1>
            <h6>
              Return to the <Link to="/">Home</Link> page to add some favourite
              movie.
            </h6>
          </div>
        ) : (
          // if there are favorite movies, display them in a container
          <div className="movie-card-container">
            <h4>Favorite Movies</h4>
            {favs !== null &&
              favs.length > 0 &&
              favs.map((movie) => (
                <MovieCard
                  key={movie.id} //unique key id for each movie card
                  movie={movie} //pass the movie object as a prop to the movieCArd component
                  isFav={isFav(favs, true, movie.id)} //check if the movie is a favorite
                />
              ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Fav;
