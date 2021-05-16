import "./Comic.css";

import axios from "axios";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

require("dotenv").config();

const Comic = ({ comic, isFav, setFavComics, userToken }) => {
  // Favorites
  const adminFavorites = async (isFav) => {
    try {
      const token = Cookies.get("userToken");
      const action = isFav ? "remove" : "add";

      const response = await axios.get(
        `${process.env.REACT_APP_PATH_SERVER}/comic/admin-favorites/${token}/${comic._id}/${action}`
      );

      console.log(response.data);
      setFavComics(response.data.favoritesComics);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="comic-card">
      <Link className="comic-card-link" to={`/comic/${comic._id}`}>
        <div className="comic-title">{comic.title}</div>
        <div className="comic-img">
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
        </div>
      </Link>
      <br />
      {userToken && (
        <FontAwesomeIcon
          icon="star"
          className={`icon ${isFav && "icon-isfav"}`}
          onClick={() => {
            adminFavorites(isFav);
          }}
        />
      )}

      <div className="comic-description">
        {/* <span> {comic.description}</span> */}
      </div>
    </div>
  );
};

export default Comic;
