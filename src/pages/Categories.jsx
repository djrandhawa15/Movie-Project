import React from 'react'

const Categories= ({ fetchMovies }) =>  {

    const listofMovies = [ "popular", "top_rated", "now_playing", "upcoming"];
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

export default Categories