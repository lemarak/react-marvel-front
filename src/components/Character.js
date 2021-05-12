import "./Character.css";

const Character = ({ char }) => {
  return (
    <div className="character-card">
      <h3>{char.name}</h3>
    </div>
  );
};

export default Character;
