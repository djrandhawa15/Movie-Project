import React from 'react'

const categories= ({ fetchMovies }) =>  {

    const listofMovies = [ "Popular", "Top Rated", "Now Playing", "Upcoming"];
    return (
      <nav>
        <ul>
          {listofMovies.map((listofMovie) => (
            <li key={listofMovie}>
              <button onClick={() => fetchMovies(listofMovie)}>{listofMovie}</button>
              </li>
          ))}
        </ul>
  
      </nav>
  
    )
}

export default categories