import "./Signup.css";

import axios from "axios";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const history = useHistory();

  // Form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // error
  // 0 : not error
  // 1x : required fields (Front)
  // 2 : different passwords (Front)
  // 3 : email already exists (Back)
  // 4 : user already exists (Back)
  const [error, setError] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && username && password && confirmPassword) {
      setError(0);
      if (password !== confirmPassword) {
        setError(2);
      } else {
        const data = {
          email,
          username,
          password,
        };
        try {
          const response = await axios.post(
            // "https://marvel-back-sda.herokuapp.com/user/signup",
            "http://localhost:4000/user/signup",
            data
          );
          const token = response.data.token;
          if (token) {
            setUser(response.data.token);
            history.push("/");
          }
        } catch (error) {
          console.log(error.response.data.message);
          if (error.response.data.message === "email exists") {
            setError(3);
          } else if (error.response.data.message === "username exists") {
            setError(4);
          }
        }
      }
    } else {
      if (!email) {
        setError(11);
      } else if (!username) {
        setError(12);
      } else if (!password) {
        setError(13);
      } else if (!confirmPassword) {
        setError(14);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>S'inscrire</h2>
      <form className="form-marvel" method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        {error === 3 && (
          <span className="signup-login-error-message">
            * Cet email a déjà un compte chez nous !
          </span>
        )}
        {error === 11 && (
          <span className="signup-login-error-message">
            * Email obligatoire !
          </span>
        )}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Votre nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        {error === 4 && (
          <span className="signup-login-error-message">
            * Cet utilisateur a déjà un compte chez nous !
          </span>
        )}
        {error === 12 && (
          <span className="signup-login-error-message">Nom obligatoire !</span>
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        {error === 13 && (
          <span className="signup-login-error-message">
            * Mot de passe obligatoire !
          </span>
        )}
        <input
          type="password"
          name="password-confirm"
          id="password-confirm"
          placeholder="Confirmation du mot de passe"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
        />
        {error === 2 && (
          <span className="signup-login-error-message">
            * Les mots de passe doivent être identiques !
          </span>
        )}
        {error === 14 && (
          <span className="signup-login-error-message">
            * Confirmation du mot de passe obligatoire !
          </span>
        )}
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <span>Tu as déjà un compte ? Connecte-toi !</span>
      </Link>
    </div>
  );
};

export default Signup;
