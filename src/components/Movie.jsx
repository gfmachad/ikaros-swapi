import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// import '../styles/films.scss';
import { People } from './People';
import { Starships } from './Starships';
import { Planets } from './Planets';

export function Movie() {
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch('https://swapi.dev/api/films/' + id)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        console.log(data.planets);
      });
  }, []);

  return (
    <div className="films-list">
      {movie && (
        <div className="data">
          <h2>{movie.title}</h2>
          <p>ID: {movie.episode_id}</p>
          <p>Sinope: {movie.opening_crawl}</p>
          <p>Director: {movie.director}</p>
          <p>Productor: {movie.producer}</p>
          <p>Release: {movie.release_date}</p>
          <p>Characters:</p>
          <People urls={movie.characters} />
          <p>Planets:</p>
          <Planets urls={movie.planets} />
          <p>Starships:</p>
          <Starships urls={movie.starships} />
        </div>
      )}
    </div>
  );
}
