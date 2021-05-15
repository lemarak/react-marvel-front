import "./Favorites.css";

import axios from "axios";
import { useState, useEffect } from "react";

const Favorites = () => {
  return (
    <section className="container">
      <h1>Mes favoris</h1>
      <div className="favorites-container">
        <h3>Liste personnages</h3>
      </div>
      <div className="favorites-container">
        <h3>Liste comics</h3>
      </div>
    </section>
  );
};

export default Favorites;
