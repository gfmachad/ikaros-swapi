import React, { useState, useEffect } from 'react';

import '../styles/films.scss';

export function Starships(props) {
  const [starships, setStarships] = useState(null);

  useEffect(() => {
    async function fetchStarships() {
      let obj = {};
      for (let i = 1; i <= 4; i++) {
        const response = await fetch(
          'http://swapi.dev/api/starships/?page=' + i
        );
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
          obj[data.results[i].url] = data.results[i];
          console.log('ships', data.results);
        }
      }

      // console.log('obj', obj);

      setStarships(obj);
    }
    fetchStarships();
  }, []);

  function Star(props) {
    return (
      <>
        <li>
          <p>{props.starship.name}</p>
        </li>
      </>
    );
  }

  return (
    <>
      {starships && (
        <section className="films-list">
          <ul>
            {props.urls.map((url) => {
              return (
                <>
                  <Starship key={url} starship={starship[url]} />
                </>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
