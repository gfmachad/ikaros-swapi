import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import '../styles/films.scss';
import { Starships } from './Starships';

export function Starship() {
  const [starship, setStarship] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/' + id)
      .then((response) => response.json())
      .then((data) => {
        setStarship(data.results);
        console.log('ship', data.results);
      });
  }, []);

  return (
    <>
      {starship && (
        <div>
          <h2>{starship.name}</h2>
          <Starships urls={starship.name} />
        </div>
      )}
    </>
  );
}
