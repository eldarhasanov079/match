// src/components/SearchBar/index.js
import React, { useState } from 'react';
import './styles.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for classes..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;
