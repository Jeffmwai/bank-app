import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={searchTerm} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
