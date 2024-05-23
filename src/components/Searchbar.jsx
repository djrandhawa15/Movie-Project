import React, { useState } from 'react';

const Searchbar = ({ fetchMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = (e) => {
    if (searchQuery.trim()) {
      fetchMovies(searchQuery);
      setSearchQuery(""); // Clear the search field after search
    }
    
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}/>
     
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;