import axios from "axios";
import { useState, useEffect } from "react";

import "./Characters.css";

import IsLoading from "../components/IsLoading";
import Character from "../components/Character";
import Pagination from "../components/Pagination";

const Characters = ({ page, setPage }) => {
  const LIMIT = 100;

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?page=${page}`
        );
        setCharacters(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  const charactersDisplay = characters.map((elem, index) => {
    return <Character key={index} char={elem} />;
  });

  //   const charactersDisplay = [];
  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <h1>Liste des personnages</h1>
      <Pagination page={page} setPage={setPage} />
      <div className="characters-container">{charactersDisplay}</div>
      <Pagination page={page} setPage={setPage} />
    </section>
  );
};

export default Characters;
