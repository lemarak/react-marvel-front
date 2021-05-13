import "./CharacterComics.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import IsLoading from "../components/IsLoading";
import Comic from "../components/Comic";

const CharacterComics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState([]);
  const { id } = useParams();

  //Get one character and his comics
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-back-sda.herokuapp.com/comics/${id}`
        );
        console.log(response.data.comics);
        setCharacter(response.data);
        setComics(response.data.comics);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Display comics list
  const comicsDisplay = comics.map((elem, index) => {
    return <Comic key={index} comic={elem} />;
  });

  return isLoading ? (
    <IsLoading />
  ) : (
    <div>
      <div className="character-details">
        <h2>{character.name}</h2>{" "}
      </div>
      <div className="comics-list">{comicsDisplay}</div>
    </div>
  );
};

export default CharacterComics;
