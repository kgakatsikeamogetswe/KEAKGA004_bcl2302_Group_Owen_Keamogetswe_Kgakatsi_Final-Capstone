import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Favorites from './Favorites';
import './Preview.css';

const Preview = () => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add an episode to favorites with timestamp
  const addToFavorites = (episode) => {
    const timestamp = new Date().toISOString();
    setFavorites((prevFavorites) => [...prevFavorites, { ...episode, timestamp }]);
  };

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      {shows.map((show) => (
        <div key={show.id} className="contacts">
          <div className="card">
            <div className="img-card">
              <img className="" src={show.image} width="50%" alt={show.title} />
            </div>
            <div className="tittle-show">
              <p>{show.title}</p>
              {/* Button to add to favorites */}
              <button onClick={() => addToFavorites(show)}>Add to Favorites</button>
            </div>
          </div>
        </div>
      ))}

      {/* Display Favorites */}
      <Favorites favorites={favorites} />
    </div>
  );
};

export default Preview;