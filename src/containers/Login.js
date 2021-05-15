import "./Signup.css";

import axios from "axios";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  // form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error
  // 0 : not error
  // 1x : required fields (Front)
  // 2 : Unauthorized
  const [error, setError] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    if (email && password) {
      setError(0);
      try {
        const response = await axios.post(
          "https://marvel-back-sda.herokuapp.com/user/login",
          data
        );
        const token = response.data.token;

        if (token) {
          setUser(response.data.token);
          history.push("/");
        }
      } catch (error) {
        if (error.response.data.message === "Unauthorized") {
          setError(2);
        }
      }
    } else {
      if (!email) {
        setError(11);
      } else if (!password) {
        setError(13);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Se connecter</h2>
      <form className="form-marvel" method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        {error === 11 && (
          <span className="signup-login-error-message">
            * Email obligatoire !
          </span>
        )}
        {error === 2 && (
          <span className="signup-login-error-message">
            * Email et/ou mot de passe non valide(s) !
          </span>
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
        <button type="submit">Se connecter</button>
      </form>
      <Link to="/signup">
        <span>Tu n'as pas de compte ? Inscris-toi !</span>
      </Link>
    </div>
  );
};

export default Login;
