import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.scss';

export function StarWarsMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        // console.log(data.results);
      });
  }, []);

  function FilmItem(props) {
    // console.log(props.movie);

    return (
      <div className="cards">
        <Link to={`/films/${props.movie.episode_id}`}>
          <img
            src={`/img/${props.movie.episode_id}.jpg`}
            alt={props.movie.name}
          />
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="films-list">
        <h1>STARWARS</h1>

        <ul>
          {movies.map((movie) => {
            return <FilmItem key={movie.episode_id} movie={movie} />;
          })}
        </ul>
      </section>
    </>
  );
}
