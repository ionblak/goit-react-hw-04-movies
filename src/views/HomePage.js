import React, { useState, useEffect } from 'react';
import { getPopularFilms } from '../api/apiServices';
import Content from '../Component/Content';
import MoviesList from '../Component/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularFilms().then(data => setMovies(data));
  }, []);

  return (
    <Content>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </Content>
  );
};

export default HomePage;
