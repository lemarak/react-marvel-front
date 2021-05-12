import "./Comic.css";

import { Link } from "react-router-dom";

const Comic = ({ comic }) => {
  const srcComic = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  return (
    <div className="character-card">
      <Link>
        <h3>{comic.title}</h3>
        <div className="character-img">
          <img src={srcComic} alt={comic.title} />
        </div>
        <div className="character-description">
          {/* <span> {char.description}</span> */}
        </div>
      </Link>
    </div>
  );
};

export default Comic;
