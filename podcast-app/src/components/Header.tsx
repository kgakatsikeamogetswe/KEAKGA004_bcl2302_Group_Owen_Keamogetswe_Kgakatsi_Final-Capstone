
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';



export const Header = () => {
    const navigate = useNavigate()
  const favoritesIcon = () => {
    navigate('/components/FavoritesPage');
    };
  
    return(
        <div className="header__container">

            <div className="left--btn">
            <h1 className="title__name">K_P</h1>
            <img className="podcast__img" src="./src/assets/microphone.png" alt="mic icon"></img>
            </div>

            <div className="right--btn">
            
             <button 
             onClick={favoritesIcon}
             className="fav__button"
             >
              <StarIcon id="Star-Icon" />
             </button>
            
            </div>

        </div>

    )
}