import React, { useState, useEffect } from 'react';

import '../styles/films.scss';

export function Planets(props) {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    async function fetchPlanets() {
      let obj = {};
      for (let i = 1; i <= 9; i++) {
        const response = await fetch('http://swapi.dev/api/planets/?page=' + i);
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
          obj[data.results[i].url] = data.results[i];
          // console.log(data.results);
        }
      }

      // console.log('obj', obj);

      setPlanets(obj);
    }
    fetchPlanets();
  }, []);

  function Planet(props) {
    return (
      <>
        <li>
          <p>{props.planet.name}</p>
        </li>
      </>
    );
  }

  return (
    <>
      {planets && (
        <section className="films-list">
          <ul>
            {props.urls.map((url) => {
              return (
                <>
                  <Planet key={url} planet={planet[url]} />
                </>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
