import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo-marvel.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo Marvel" />
      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <Link to="/comics">
          <li>Comics</li>
        </Link>

        <li>Favoris</li>
      </ul>
    </header>
  );
};

export default Header;
