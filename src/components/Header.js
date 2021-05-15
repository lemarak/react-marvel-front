import "./Header.css";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo-marvel.svg";

const Header = ({ userToken }) => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo Marvel" />
      </Link>

      <ul>
        <Link to="/">
          <li>Personnages</li>
        </Link>
        <Link to="/comics">
          <li>Comics</li>
        </Link>

        {userToken && <li>Favoris</li>}
      </ul>

      <ul>
        {userToken ? (
          <li>connexion</li>
        ) : (
          <>
            <Link to="/signup">
              <li>inscription</li>
            </Link>
            <Link to="/login">
              <li>connexion</li>
            </Link>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
