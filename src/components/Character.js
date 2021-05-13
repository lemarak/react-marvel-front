import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({ char }) => {
  const srcChar = `${char.thumbnail.path}.${char.thumbnail.extension}`;
  return (
    <Link to={`character/${char._id}`}>
      <div className="character-card">
        <h3>{char.name}</h3>
        <div className="character-img">
          <img src={srcChar} alt={char.name} />
        </div>
        <div className="character-description">
          <div> {char.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Character;
