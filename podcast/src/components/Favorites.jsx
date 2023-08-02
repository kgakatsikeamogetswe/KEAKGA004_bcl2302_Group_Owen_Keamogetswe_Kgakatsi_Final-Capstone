import React, { useState } from 'react';

const Favorites = ({ favorites }) => {
  const [sortedFavorites, setSortedFavorites] = useState([...favorites]);
  const [sortBy, setSortBy] = useState('A-Z');

  const handleSortChange = (option) => {
    setSortBy(option);
    let sorted;
    if (option === 'A-Z') {
      sorted = favorites.sort((a, b) => a.show.title.localeCompare(b.show.title));
    } else if (option === 'Z-A') {
      sorted = favorites.sort((a, b) => b.show.title.localeCompare(a.show.title));
    } else if (option === 'date-asc') {
      sorted = favorites.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    } else if (option === 'date-desc') {
      sorted = favorites.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    }
    setSortedFavorites([...sorted]);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <button onClick={() => handleSortChange('A-Z')}>Sort A-Z</button>
        <button onClick={() => handleSortChange('Z-A')}>Sort Z-A</button>
        <button onClick={() => handleSortChange('date-asc')}>Sort by Date (Ascending)</button>
        <button onClick={() => handleSortChange('date-desc')}>Sort by Date (Descending)</button>
      </div>
      {sortedFavorites.map((favorite) => (
        <div key={favorite.id} className="contacts">
          <div className="card">
            <div className="img-card">
              <img className="" src={favorite.show.image} width="50%" alt={favorite.show.title} />
            </div>
            <div className="tittle-show">
              <p>{favorite.show.title}</p>
              <p>Added on: {favorite.timestamp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;