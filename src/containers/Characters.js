import "./Characters.css";

import axios from "axios";
import { useState, useEffect } from "react";

import IsLoading from "../components/IsLoading";
import Character from "../components/Character";
import Pagination from "../components/Pagination";

const Characters = ({ page, setPage, search, setSearch, userToken }) => {
  const LIMIT = 100;

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [favCharacters, setFavCharacters] = useState([]);

  // Get favorites
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userToken) {
          const response = await axios.get(
            `${process.env.REACT_APP_PATH_SERVER}/user?token=${userToken}`
          );
          setFavCharacters(response.data.favoritesCharacters);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userToken]);

  // Get characters from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];

        response = await axios.get(
          `${process.env.REACT_APP_PATH_SERVER}/characters?page=${page}&name=${search}`
        );

        setCharacters(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search, userToken]);

  // For search
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Display characters
  const charactersDisplay = characters.map((elem, index) => {
    const isFav = favCharacters.indexOf(elem._id) !== -1;
    return (
      <Character
        key={index}
        char={elem}
        isFav={isFav}
        userToken={userToken}
        setFavCharacters={setFavCharacters}
      />
    );
  });

  // Render
  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <div className="characters-header">
        <h1>Liste des personnages</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={() => {
              setSearch("");
            }}
          >
            X
          </button>
          <span className="count-result">
            {count} personnages {search && `pour ${search}`}
          </span>
        </div>
      </div>

      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
      <div className="characters-container">{charactersDisplay}</div>
      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
    </section>
  );
};

export default Characters;
