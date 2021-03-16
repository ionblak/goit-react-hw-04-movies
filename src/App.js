import { Route, Switch, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import Navigation from './Component/Navigation';
import { createUseStyles } from 'react-jss';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

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
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
