import React from "react";
import "../styles/movieCard.css";

// Fav Button

function FavoriteIcon({ movie, remove, handleFavClick }) {
  function handleAddFav() {
    handleFavClick(true, movie);
  }

  function handleRemoveFav() {
    handleFavClick(false, movie);
  }

  return (
    <>
      <button onClick={remove === false ? handleAddFav : handleRemoveFav}>
        <svg
          id="favorite-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill={remove === false ? "#eee" : "#ff0000"}
            d="M19 24l-7-6-7 6v-24h14v24z"
          />
        </svg>
      </button>
     
    </>
  );
}


export default FavoriteIcon;
