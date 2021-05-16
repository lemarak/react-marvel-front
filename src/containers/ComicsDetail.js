import "./ComicsDetail.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import IsLoading from "../components/IsLoading";

const ComicsDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState();
  const { id } = useParams();

  //Get one comic
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PATH_SERVER}/comic/${id}`
        );
        console.log(response.data);

        setComic(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <IsLoading />
  ) : (
    <section className="container">
      <div className="comic-detail">
        <h1>{comic.title}</h1>
        <div className="comic-detail-description-img">
          <div className="comic-detail-description">{comic.description}</div>
          <div className="comic-detail-img">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComicsDetail;
