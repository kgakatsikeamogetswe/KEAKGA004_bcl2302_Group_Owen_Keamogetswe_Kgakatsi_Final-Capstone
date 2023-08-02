import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar() {
  const [input, setInput] = React.useState('');

  const fetchData = (value) => {
    if (value) {
      fetch('https://podcast-api.netlify.app/shows')
        .then((res) => res.json())
        .then((json) => {
          const lowercaseValue = value.toLowerCase();
          const results = json.filter((show) => show.title.toLowerCase().includes(lowercaseValue));
          console.log(results);
        })
        .catch((error) => console.error('Error fetching shows:', error));
    } else {
      console.log('Empty search input');
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="Search-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Search here!"
          className="search-bar-input"
          value={input}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;