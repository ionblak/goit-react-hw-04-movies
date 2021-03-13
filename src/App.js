import { Route, Switch } from 'react-router-dom';
import React from 'react';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import Navigation from './Component/Navigation';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  App: {
    display: 'flex',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
