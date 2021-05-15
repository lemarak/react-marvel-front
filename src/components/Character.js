import "./Character.css";

import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = ({ char }) => {
  const addToFavorites = async () => {
    try {
      const token = Cookies.get("userToken");
      const response = await axios.get(
        `https://marvel-back-sda.herokuapp.com/character/add-favorites/${token}/${char._id}`
        // `http://localhost:4000/comic/add-favorites/${token}/${comic._id}`
      );
      console.log(response);
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
      <FontAwesomeIcon icon="star" className="icon" onClick={addToFavorites} />
      <div className="character-description">
        <div> {char.description}</div>
      </div>
    </div>
  );
};

export default Character;
