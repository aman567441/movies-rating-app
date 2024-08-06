import React, { useEffect, useState } from "react";
import "../movieList/movieList.css";
import { useParams } from "react-router-dom";
import Card from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=33df16a93293e8ae00b32c862c835c25`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovieList(data.results);
        } else {
          setMovieList([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setMovieList([]);
      });
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.length > 0 ? (
          movieList.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
