import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StarWarsMovies } from './components/StarWarsMovies';

import { Movie } from './components/Movie';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/films/:id" component={Movie} />

        <Route path="/" component={StarWarsMovies} />
      </Switch>
    </Router>
  );
}

export default Routes;
