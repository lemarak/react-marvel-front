import "./Signup.css";

import axios from "axios";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  // Form fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // error
  // 0 : not error
  // 1 : required fields (Front)
  // 2 : different passwords (Front)
  const [error, setError] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      username,
      password,
      confirmPassword,
    };
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
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Votre nom d'utilisateur"
          onChange={(event) => setEmail(event.target.value)}
          value={username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Votre mot de passe"
          onChange={(event) => setEmail(event.target.value)}
          value={password}
        />
        <input
          type="password"
          name="password-confirm"
          id="password-confirm"
          placeholder="Confirmation du mot de passe"
          onChange={(event) => setEmail(event.target.value)}
          value={confirmPassword}
        />
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <span>Tu as déjà un compte ? Connecte-toi !</span>
      </Link>
    </div>
  );
};

export default Signup;
