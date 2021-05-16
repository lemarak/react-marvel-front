import "./Favorites.css";

import axios from "axios";
import { useState, useEffect } from "react";

import Comic from "../components/Comic";
import Character from "../components/Character";
import IsLoading from "../components/IsLoading";

const Favorites = ({ userToken }) => {
  const [favCharacters, setFavCharacters] = useState([]);
  const [favComics, setFavComics] = useState([]);
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get favorites from user
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userToken) {
          const response = await axios.get(
            `${process.env.REACT_APP_PATH_SERVER}/user?token=${userToken}`
          );
          setFavCharacters(response.data.favoritesCharacters);
          setFavComics(response.data.favoritesComics);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userToken]);

  // Get favorites comics
  useEffect(() => {
    const fetchData = async () => {
      try {
        setComics([]);
        if (userToken && favComics.length > 0) {
          const list = [];
          for (let i = 0; i < favComics.length; i++) {
            const response = await axios.get(
              `${process.env.REACT_APP_PATH_SERVER}/comic/${favComics[i]}`
            );
            list.push(response.data);
          }
          setComics(list);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [favComics, userToken]);

  // Get favorites characters
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCharacters([]);
        if (userToken && favCharacters.length > 0) {
          const list = [];
          for (let i = 0; i < favCharacters.length; i++) {
            const response = await axios.get(
              `${process.env.REACT_APP_PATH_SERVER}/character/${favCharacters[i]}`
            );
            list.push(response.data);
          }
          setCharacters(list);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [favCharacters, userToken]);

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

  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <h1>Mes favoris</h1>
      {comicsDisplay.length > 0 && (
        <div className="favorites-container">
          <h3>Comics favoris</h3>
          <div className="comics-container">{comicsDisplay}</div>
        </div>
      )}
      {charactersDisplay.length > 0 && (
        <div className="favorites-container">
          <h3>Personnages favoris</h3>
          <div className="characters-container">{charactersDisplay}</div>
        </div>
      )}
    </section>
  );
};

export default Favorites;
