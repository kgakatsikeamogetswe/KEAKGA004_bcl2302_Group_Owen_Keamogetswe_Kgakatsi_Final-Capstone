// import React from "react";
// import { useParams } from "react-router-dom";
// const API_URL = 'https://podcast-api.netlify.app/id/'
// interface Episode {
//   title: string;
//   description: string;
//   episodeNumber: number;
//   audioFile: string;
// }
// interface Season {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
//   seasons: number;
//   updated: string;
//   genres: number[];
//   episodes: Episode[];
// }

// function Seasons() {
//   const { seasonId } = useParams<{ seasonId: string }>();
//   const [season, setSeason] = React.useState<Season | null>(null);
//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API_URL}/${seasonId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setSeason(data);
//         } else {
//           throw new Error("Failed to fetch podcast data");
//         }
//       } catch (error) {
//         console.error("Error fetching podcast data:", error.message);
//       }
//     };
//     fetchData();
//   }, [seasonId]);
//   console.log(seasonId)
//   if (!season) {
//     return <div>Loading...</div>;
//   }
//   if (!season || !season.episodes) {
//     // Handle the case when season is null or season.episodes is null
//     return <div>No episodes available!</div>;
//   }
//   const episodeElements = season.episodes.map((episode) => (
//     <div key={episode.episodeNumber}>
//       <h2>{episode.title}</h2>
//       <p>{episode.description}</p>
//       <audio controls>
//         <source src={episode.audioFile} type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   ))
//   return (
//     <div>
//       <h1>{season.title}</h1>
//       <p>{season.description}</p>
//       <img src={season.image} alt={season.title} />
//       <div>{episodeElements}</div>;
//     </div>
//   );
// }
// export default Seasons;