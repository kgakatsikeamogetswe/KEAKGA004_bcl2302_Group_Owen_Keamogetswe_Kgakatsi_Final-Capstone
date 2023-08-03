// // NavigationBar.tsx
// import { IoIosArrowBack } from 'react-icons/io';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css'
// //import { Input } from '@mui/material';

// interface NavigationBarProps {
//   onSearch: (query: string) => void;
//   onSort: (ascending: boolean) => void;
//   onThemeChange: () => void;
// }
// function NavBar({ onSearch, onSort, onThemeChange }: NavigationBarProps) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };
//   const handleSearchSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     onSearch(searchQuery);
//   };
//   const handleSortOptionChange = () => {
//     onSort(true);
//   };
//   const handleThemeChange = () => {
//     onThemeChange();
//   };
//   return (

//     <div className="navigation-bar">
//       <Link to="/">
//         <button className="back-btn"><IoIosArrowBack id="back-icon"/></button>
//       </Link>

//       <div className="sort-option">

//       </div>
      
//       <form onSubmit={handleSearchSubmit} className="search-bar">
//       <label className="right">
//           A-Z
//           <input type="radio" name="sort-option" onChange={handleSortOptionChange} />
//         </label>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//           placeholder="Search for a podcast..."
//         />

//       </form>
      
//       <div className="theme-toggle">
//         <button onClick={handleThemeChange}>Toggle Theme</button>
//       </div>
//     </div>
//   );
// }
// export default NavBar;