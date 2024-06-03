import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/cast.css";
const apiKey = import.meta.env.VITE_API_KEY;

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  // Extract movie ID from URL parameters
  let { id } = useParams();

  useEffect(() => {
    const fetchCastInfo = async () => {
      // Fetch cast info using the movie ID
      try {
        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        if (!castResponse.ok) {
          throw new Error("Failed to fetch cast data");
        }
        const castData = await castResponse.json();
        // Update state with cast data (limit to first 6 actors)
        setCast(castData.cast.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    // Call the fetchCastInfo function when the component mounts or when movieId changes
    fetchCastInfo();
  }, [movieId]);

  return (
    <div className="cast-container">
      <h6>Cast</h6>

      {cast.map((actor) => (
        <article className="cast-style">
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />

          <h6>{actor.name}</h6>
          <p>{actor.character}</p>
        </article>
      ))}
    </div>
  );
};

export default Cast;
