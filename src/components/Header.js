import "./Header.css";
import Logo from "../assets/img/logo-marvel.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo Marvel" />
      <ul>
        <li>Personnages</li>
        <li>Comics</li>
        <li>Favoris</li>
      </ul>
    </header>
  );
};

export default Header;
