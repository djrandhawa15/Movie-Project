import React from 'react';
import { useState, useEffect } from 'react';
import Categories from '../src/pages/Categories.jsx';
// const apiKey = import.meta.env.API_KEY


  
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

  useEffect( () => {
    const fetchMovies = async () => {
      const apiKey = '0143a6b89b7cfaa0bd7babb647960156';
      const response = await fetch (`https://api.themoviedb.org/3/movie/${listofMovie}?api_key=${apiKey}`);
      const data = await response.json();
      setMovies(data.results);

    }

    fetchMovies();

  }, [])

  return (
    <div>
      <Categories/>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movies) =>(
          <li key={movies.id}>{movies.title}</li>
        ))}
      </ul>
      </div>
  )
}




export default Home;