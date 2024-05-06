import React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories';
// import Categories from './Categories';
const apiKey = import.meta.env.VITE_API_KEY


  
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

  useEffect( () => {
    const fetchMovies = async () => {
      // const apiKey = '0143a6b89b7cfaa0bd7babb647960156';
      const response = await fetch (`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}`);
      const data = await response.json();
      setMovies(data.results);
      console.log("here");

    }

    fetchMovies(selectedCategory);

  }, [selectedCategory])

  const handleCategoryChange = (listofMovie) => {
    setSelectedCategory(listofMovie);
  }

  return (
    <div>
      <Categories fetchMovies={handleCategoryChange}/>
      <h1>Movies</h1>
      <ul>
         {movies && movies.map((movie) =>(
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      </div>
  )
}




export default Home;