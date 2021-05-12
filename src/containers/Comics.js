import "./Comics.css";

import axios from "axios";
import { useState, useEffect } from "react";

import IsLoading from "../components/IsLoading";
import Comic from "../components/Comic";
import Pagination from "../components/Pagination";

const Comics = ({ page, setPage }) => {
  const LIMIT = 100;

  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-back-sda.herokuapp.com/comics?page=${page}`
        );
        setComics(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  const comicsDisplay = comics.map((elem, index) => {
    return <Comic key={index} comic={elem} />;
  });

  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <h1>Liste des comics</h1>
      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
      <div className="comics-container">{comicsDisplay}</div>
      <Pagination page={page} setPage={setPage} count={count} limit={LIMIT} />
    </section>
  );
};

export default Comics;
