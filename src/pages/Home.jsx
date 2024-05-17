import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import MovieCard from './MovieCard';
import Searchbar from './Searchbar';
import '../styles/home.css';

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || 'popular');
  const [heroImage, setHeroImage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (categoryOrQuery, page = 1) => {
    try {
      const url = categoryOrQuery === 'popular' || categoryOrQuery === 'top_rated' || categoryOrQuery === 'now_playing' || categoryOrQuery === 'upcoming'
        ? `https://api.themoviedb.org/3/movie/${categoryOrQuery}?api_key=${apiKey}&page=${page}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${categoryOrQuery}&page=${page}`;

      const response = await fetch(url);
      const data = await response.json();
      setMovies((prevMovies) => (page === 1 ? data.results : [...prevMovies, ...data.results]));
      setTotalPages(data.total_pages);

      if (data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const bg = data.results[randomIndex].backdrop_path
          ? data.results[randomIndex].backdrop_path
          : data.results[randomIndex].poster_path;
        setHeroImage(`https://image.tmdb.org/t/p/original${bg}`);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies(selectedCategory, 1);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category);
    setCurrentPage(1);
    fetchMovies(category, 1); // Fetch movies for the new category
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchMovies(selectedCategory, nextPage); // Fetch more movies
    }
  };

  return (
    <div className='container'>
      <div className="hero-text"></div>
      {heroImage && (
        <div className="hero">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      )}
      <Searchbar fetchMovies={fetchMovies} />
      <Categories fetchMovies={handleCategoryChange} />
      <div>
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Home;