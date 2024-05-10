import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import MovieCard from './MovieCard';
import '../styles/home.css';
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || 'popular');
  const [heroImage, setHeroImage] = useState("");

  useEffect( () => {
    const fetchMovies = async () => {
      
      const response = await fetch (`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}`);
      const data = await response.json();
      setMovies(data.results);
      setHeroImage(`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`);

      if(movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        
        const bg = movies[randomIndex].backdrop_path ? movies[randomIndex].backdrop_path : movies[randomIndex].poster_path;
        setHeroImage(`https://image.tmdb.org/t/p/original${bg}`);
      } 
     

    }

    fetchMovies(selectedCategory);

  }, [selectedCategory])


  const handleCategoryChange = (listofMovie) => {
    setSelectedCategory(listofMovie);
    localStorage.setItem('selectedCategory', listofMovie); // Store selected category in localStorage

  }

  return (
    <div className='container'>
          <div className="hero-text">
         
          </div>
      {heroImage && (
        <div className="hero">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      )}
      <Categories fetchMovies={handleCategoryChange}/>
    
      
      
         {movies && movies.map((movie) =>(
          <MovieCard key={movie.id} movie={movie} />
         
        ))}
      
      
      </div>
  )
}




export default Home;