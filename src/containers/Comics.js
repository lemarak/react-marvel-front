import "./Comics.css";

import axios from "axios";
import { useState, useEffect } from "react";

import IsLoading from "../components/IsLoading";
import Comic from "../components/Comic";
import Pagination from "../components/Pagination";

// Get comics from API
const Comics = ({ page, setPage, search, setSearch, userToken }) => {
  const LIMIT = 100;

  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [favComics, setFavComics] = useState([]);

  // Get favorites
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userToken) {
          const response = await axios.get(
            `${process.env.REACT_APP_PATH_SERVER}/user?token=${userToken}`
          );
          setFavComics(response.data.favoritesComics);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userToken]);

  // Get comics from API
  useEffect(() => {
    const fetchData = async () => {
      let response = [];
      try {
        if (search) {
          response = await axios.get(
            `${process.env.REACT_APP_PATH_SERVER}/search/comics?title=${search}`
          );
        } else {
          response = await axios.get(
            `${process.env.REACT_APP_PATH_SERVER}/comics?page=${page}`
          );
        }
        setComics(response.data.results);
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

  // Display comics
  const comicsDisplay = comics.map((elem, index) => {
    const isFav = favComics.indexOf(elem._id) !== -1;
    return (
      <Comic
        key={index}
        comic={elem}
        isFav={isFav}
        userToken={userToken}
        setFavComics={setFavComics}
      />
    );
  });

  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <div className="favorites-header">
        <h1>Liste des comics</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Rechercher un comics"
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
      <div className="comics-container">{comicsDisplay}</div>
      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
    </section>
  );
};

export default Comics;
