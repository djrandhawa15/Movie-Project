import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import MovieCard from './MovieCard';
// const apiKey = import.meta.env.VITE_API_KEY;


  
// const TabList = () => {
//   return (
//     <div className="tab-list">
//       <NavLink to="/popular" activeClassName="active">Popular</NavLink>
//       <NavLink to="/top-rated" activeClassName="active">Top Rated</NavLink>
//       <NavLink to="/now-playing" activeClassName="active">Now Playing</NavLink>
//       <NavLink to="/upcoming" activeClassName="active">Upcoming</NavLink>
//     </div>
//   );
// }

const Home = () => {
  // const [sort, setSort] = useState(listofMovies[0])
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [heroImage, setHeroImage] = useState("");

  useEffect( () => {
    const fetchMovies = async () => {
      const apiKey = '0143a6b89b7cfaa0bd7babb647960156';
      const response = await fetch (`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}`);
      const data = await response.json();
      setMovies(data.results);
      if (data.results.length > 0) {
        setHeroImage(`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`);
      }

    }

    fetchMovies(selectedCategory);

  }, [selectedCategory])


  const handleCategoryChange = (listofMovie) => {
    setSelectedCategory(listofMovie);
  }

  return (
    <div>
          <div className="hero-text">
            <h1>Welcome to CINE HUB</h1>
            <p>Discover your favorite movies here</p>
          </div>
      {heroImage && (
        <div className="hero">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      )}
      <Categories fetchMovies={handleCategoryChange}/>
      <h1>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Movies</h1>
      
      <ul>
         {movies && movies.map((movie) =>(
          <MovieCard key={movie.id} movie={movie} />
          // <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      
      </div>
  )
}




export default Home;