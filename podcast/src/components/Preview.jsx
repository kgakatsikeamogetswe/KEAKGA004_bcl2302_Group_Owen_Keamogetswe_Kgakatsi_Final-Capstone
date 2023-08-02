import React from 'react';
import './Preview.css'
import SearchBar from './SearchBar'

const App = () => {
  const [shows, setShows] = React.useState([]);

  React.useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));


  }, []);

  return (
    <div>
      
      <div>
      <SearchBar />
      </div>

      
        {shows.map((show) => (
        
        <>
        
        <div className="contacts">
        <div className = "card">

        <div className="tittle-show">
          <p key={show.id}>{show.title}</p>
        </div>
    

        <div className="img-card">  
          <img className="" src={show.image} width='50%' />
        </div>
        
        </div>
        </div>
        </>

        ))}
    
    </div>
  );
};

export default App;