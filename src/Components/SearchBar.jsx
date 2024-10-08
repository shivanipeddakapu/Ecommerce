import React, { useState } from 'react';
const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={query} 
        onChange={handleChange} 
        style={{position:"relative",right:"280px",width:"250px"}}
      />
      {query && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(suggestion => (
            <li key={suggestion.id}>{suggestion.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;