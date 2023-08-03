
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';



export const Header = () => {
  
    return(
        <div className="header__container">

            <div className="left--btn">
            <h1 className="title__name">K_P</h1>
            <img className="podcast__img" src="./src/assets/microphone.png" alt="mic icon"></img>
            </div>

            <div className="right--btn">
            <Link to="./components/FavoritesPage">
             <button 
             className="fav__button"
             >
              <StarIcon id="Star-Icon" />
             </button>
            </Link>
            </div>

        </div>

    )
}