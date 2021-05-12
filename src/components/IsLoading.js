import "./IsLoading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IsLoading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin size="4x" />
      <span>En cours de chargement</span>
    </div>
  );
};

export default IsLoading;
