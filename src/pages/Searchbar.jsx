import React, { useState, useEffect } from 'react';

const Searchbar = ({ fetchMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchMovies(searchQuery);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;