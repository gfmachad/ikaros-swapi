import React, { useState, useEffect } from 'react';

import '../styles/films.scss';

export function People(props) {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      let obj = {};
      for (let i = 1; i <= 9; i++) {
        const response = await fetch('http://swapi.dev/api/people/?page=' + i);
        // console.log(response);
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
          obj[data.results[i].url] = data.results[i];
        }
      }

      console.log('obj', obj);

      setPeople(obj);
    }
    fetchPeople();
  }, []);

  function Person(props) {
    return (
      <div>
        <li>
          <p>{props.person.name}</p>
        </li>
      </div>
    );
  }

  return (
    <>
      {people && (
        <section>
          <ul>
            {props.urls.map((url) => {
              return (
                <>
                  <Person key={url} person={people[url]} />
                </>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
