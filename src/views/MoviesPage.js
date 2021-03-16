import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilms } from '../api/apiServices';
import Content from '../Component/Content';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filmsList, setFilmsList] = useState([]);

  const heandleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const heandleSearchMovies = e => {
    e.preventDefault();
    if (searchValue === '') return;
    getFilms(searchValue).then(data => setFilmsList(data));
  };

  return (
    <Content>
      <form onSubmit={heandleSearchMovies}>
        <input
          type="text"
          value={searchValue}
          onChange={heandleSearchValue}
        ></input>
        <button type="submit">Search</button>
      </form>
      {filmsList.length !== 0 && (
        <ul>
          {filmsList.map(({ id, title }) => (
            <li key={id}>
              <Link>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </Content>
  );
};
export default MoviesPage;
