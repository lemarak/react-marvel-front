import "./Signup.css";

import axios from "axios";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };
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

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button type="submit">Se connecter</button>
      </form>
      <Link to="/signup">
        <span>Tu n'as pas de compte ? Inscris-toi !</span>
      </Link>
    </div>
  );
};

export default Login;
