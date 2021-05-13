import "./Comic.css";

import { Link } from "react-router-dom";

const Comic = ({ comic }) => {
  const srcComic = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  return (
    <Link>
      <div className="comic-card">
        <div>{comic.title}</div>
        <div className="comic-img">
          <img src={srcComic} alt={comic.title} />
        </div>
        <div className="comic-description">
          {/* <span> {char.description}</span> */}
        </div>
      </div>
    </Link>
  );
};

export default Comic;
