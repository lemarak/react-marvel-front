import "./Character.css";

import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = ({ char, isFav, setFavCharacters }) => {
  const addToFavorites = async () => {
    try {
      const token = Cookies.get("userToken");
      const response = await axios.get(
        `${process.env.REACT_APP_PATH_SERVER}/character/add-favorites/${token}/${char._id}`
        // `http://localhost:4000/comic/add-favorites/${token}/${comic._id}`
      );
      console.log(response.data);
      setFavCharacters(response.data.favoritesCharacters);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const srcChar = `${char.thumbnail.path}.${char.thumbnail.extension}`;
  return (
    <div className="character-card">
      <Link className="link" to={`character/${char._id}`}>
        <h3>{char.name}</h3>
        <div className="character-img">
          <img src={srcChar} alt={char.name} />
        </div>
      </Link>
      <br />
      <FontAwesomeIcon
        icon="star"
        className={`icon ${isFav && "icon-isfav"}`}
        onClick={addToFavorites}
      />
      <div className="character-description">
        <div> {char.description}</div>
      </div>
    </div>
  );
};

export default Character;
