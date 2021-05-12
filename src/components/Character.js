import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({ char }) => {
  const srcChar = `${char.thumbnail.path}.${char.thumbnail.extension}`;
  return (
    <div className="character-card">
      <Link>
        <h3>{char.name}</h3>
        <div className="character-img">
          <img src={srcChar} alt={char.name} />
        </div>
        <div className="character-description">
          {/* <span> {char.description}</span> */}
        </div>
      </Link>
    </div>
  );
};

export default Character;