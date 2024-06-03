import React from "react";
import "../styles/movieCard.css";

// Fav Button

function FavoriteIcon({ movie, remove, handleFavClick }) {
  // Function to handle adding movie to favorites
  function handleAddFav() {
    handleFavClick(true, movie);
  }

  // Function to handle removing movie from favorites
  function handleRemoveFav() {
    handleFavClick(false, movie);
  }

  return (
    <>
      {/* Button for adding or removing from favorites, based on remove prop  */}
      <button onClick={remove === false ? handleAddFav : handleRemoveFav}>
        <svg
          id="favorite-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill={remove === false ? "#3ff0af" : "#ff0000"}
            d="M19 24l-7-6-7 6v-24h14v24z"
          />
        </svg>
      </button>
    </>
  );
}

export default FavoriteIcon;
