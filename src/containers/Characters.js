import "./Characters.css";

import axios from "axios";
import { useState, useEffect } from "react";

import IsLoading from "../components/IsLoading";
import Character from "../components/Character";
import Pagination from "../components/Pagination";

const Characters = ({ page, setPage, search, setSearch }) => {
  const LIMIT = 100;

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Get characters from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = [];
        if (search) {
          response = await axios.get(
            `https://marvel-back-sda.herokuapp.com/search/characters?name=${search}`
          );
        } else {
          response = await axios.get(
            `https://marvel-back-sda.herokuapp.com/characters?page=${page}`
          );
        }
        setCharacters(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search]);

  // For search
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Display characters
  const charactersDisplay = characters.map((elem, index) => {
    return <Character key={index} char={elem} />;
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
        </div>
      </div>

      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
      <div className="characters-container">{charactersDisplay}</div>
      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
    </section>
  );
};

export default Characters;
