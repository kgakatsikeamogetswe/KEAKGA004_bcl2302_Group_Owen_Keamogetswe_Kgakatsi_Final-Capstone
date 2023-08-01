import React from 'react';
import './Preview.css'

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
      <h1>Podcasts</h1>
      <ul>
        {shows.map((show) => (
        
        <>
        
        <div className="contacts">
        <div className = "card">

        <div className="tittle-show">
          <li key={show.id}>{show.title}</li>
        </div>
    

        <div className="img-card">  
          <img className="" src={show.image} width='50%' />
        </div>
        
        </div>
        </div>
        </>

        ))}
      </ul>
    </div>
  );
};

export default App;