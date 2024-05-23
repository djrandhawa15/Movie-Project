import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import Categories from '../components/Categories';
import MovieCard from '../components/MovieCard';
import Searchbar from '../components/Searchbar';
import '../styles/home.css';
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || 'popular');
  const [heroMovie, setHeroMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const favs = useSelector((state) => state.favorites.items);


  // function to fetch movies 
  const fetchMovies = async (categoryOrQuery, page = 1) => {
    try {
      /// Check if movies are selected by category or from the searchbar
      const url = ['popular', 'top_rated', 'now_playing', 'upcoming'].includes(categoryOrQuery)
      ? `https://api.themoviedb.org/3/movie/${categoryOrQuery}?api_key=${apiKey}&page=${page}`
      : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${categoryOrQuery}&page=${page}`;

      const response = await fetch(url);
      const data = await response.json();

      // Filter movies to include only those with a poster path
      const moviesWithPosters = data.results.filter(movie => movie.poster_path);

      setMovies((prevMovies) => (page === 1 ? moviesWithPosters : [...prevMovies, ...moviesWithPosters]));
      setTotalPages(data.total_pages);

      // Set hero image
      if (moviesWithPosters.length > 0) {
        const randomIndex = Math.floor(Math.random() * moviesWithPosters.length);
        
        setHeroMovie(moviesWithPosters[randomIndex]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(selectedCategory, 1);
  }, [selectedCategory]);

  // function to change categories 
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
    setCurrentPage(1);
    fetchMovies(category, 1); // Fetch movies for the new category
  };

  // function to load more movies
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchMovies(selectedCategory, nextPage); // Fetch more movies
    }
  };

  return (
    <div className='container'>
      {heroMovie && <Hero movie={heroMovie}/>}
      <Searchbar fetchMovies={fetchMovies} />
      <Categories fetchMovies={handleCategoryChange} />
      <div>
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)} />
        ))}
      </div>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Home;