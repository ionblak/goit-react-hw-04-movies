import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularFilms } from '../api/apiServices';
import Content from '../Component/Content';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularFilms().then(data => setFilms(data));
  }, []);

  return (
    <Content>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Content>
  );
};

export default HomePage;
