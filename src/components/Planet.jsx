import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import '../styles/films.scss';
import { Planets } from './Planets';

export function Planet() {
  const [planet, setPlanet] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/' + id)
      .then((response) => response.json())
      .then((data) => {
        setPlanet(data.results);
        // console.log(data.results);
      });
  }, []);

  return (
    <>
      {planet && (
        <div>
          <h2>{planet.name}</h2>
          <Planets urls={planet.name} />
        </div>
      )}
    </>
  );
}
