
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
//import { Switch }  from "@mui/material"


export const Header = () => {
  
    return(
        <div className="header__container">
            <div className="left__elements">
              <img className="podcast__img" src="./src/assets/mic.png" alt="mic icon"></img>
              <h1 className="podcast__name">K_P</h1>
            </div>
            <div className="right__elements">
            <Link to="./components/FavoritesPage">
             <button 
             className="favorites__button"
             >
              <StarIcon color="primary" fontSize="large" />
             </button>
            </Link>
            </div>
        </div>

    )
}