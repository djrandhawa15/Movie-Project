import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import isFav from "../utilities/isFav";
import { Link } from "react-router-dom";
import "../styles/fav.css";

const Fav = () => {
  const favs = useSelector((state) => state.favorites.items);

  // Added scrollable when there are more than 6 movies on desktop
  // useEffect(() => {
  //   if (favs.length > 6) {
  //     document.body.classList.add("scrollable");
  //   } else {
  //     document.body.classList.remove("scrollable");
  //   }
  // }, [favs]);

  return (
    <div className="fav-container">
      <section>
        <h1>Favorite Movies</h1>
        {favs.length < 1 ? (
          <p>
            No favourite movies. Return to the <Link to="/">home</Link> page to
            add some favourite movie.
          </p>
        ) : (
          <div className="movie-card-container">
            {favs !== null &&
              favs.length > 0 &&
              favs.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFav={isFav(favs, true, movie.id)}
                />
              ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Fav;
