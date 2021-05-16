import "./Character.css";

import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = ({ char, isFav, setFavCharacters, userToken }) => {
  // favorites
  const adminFavorites = async (isFav) => {
    try {
      const token = Cookies.get("userToken");
      const action = isFav ? "remove" : "add";

      const response = await axios.get(
        `${process.env.REACT_APP_PATH_SERVER}/character/admin-favorites/${token}/${char._id}/${action}`
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
        <div className="title">
          <h3>{char.name}</h3>
        </div>
        <div className="character-img">
          <img src={srcChar} alt={char.name} />
        </div>
      </Link>

      {userToken && (
        <FontAwesomeIcon
          icon="star"
          className={`icon ${isFav && "icon-isfav"}`}
          onClick={() => {
            adminFavorites(isFav);
          }}
        />
      )}

      <div className="character-description">
        <div> {char.description}</div>
      </div>
    </div>
  );
};

export default Character;
