import "./Header.css";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo-marvel.svg";

const Header = ({ userToken, setUser }) => {
  return (
    <header>
      <div className="header-container">
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

          {userToken && (
            <Link to="/favorites">
              <li>Favoris</li>
            </Link>
          )}
        </ul>

        <ul>
          {userToken ? (
            <li onClick={() => setUser(null)}>déconnexion </li>
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
      </div>
    </header>
  );
};

export default Header;
