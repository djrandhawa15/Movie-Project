import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import isFav from "../utilities/isFav";
import { Link } from "react-router-dom";

const Fav = () => {
  const favs = useSelector((state) => state.favorites.items);

  
  return (
    <div>
      <h1>Favorite Movies</h1>
      {favs.length < 1 ? (
        <p>
          No favourite movies. Return to the <Link to="/">home</Link> page to
          add some favourite movie.
        </p>
      ) : (
        <div>
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
    </div>
  );
};

export default Fav;
