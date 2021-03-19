import { useEffect, useState } from 'react';
import { getFilms } from '../api/apiServices';
import Content from '../Component/Content';
import MoviesList from '../Component/MoviesList';
import queryString from 'query-string';

const MoviesPage = ({ history, location }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filmsList, setFilmsList] = useState([]);

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (location.search === '' && searchValue === '') return;
    const parse = queryString.parse(location.search);
    setSearchValue(parse.query);
    getFilms(parse.query).then(data => setFilmsList(data));
    // eslint-disable-next-line
  }, []);

  const handleSearchMovies = e => {
    e.preventDefault();
    if (searchValue === '') return;

    getFilms(searchValue).then(data => setFilmsList(data));
    history.push({
      ...location,
      search: `query=${searchValue}`,
    });
  };

  return (
    <Content>
      <form onSubmit={handleSearchMovies}>
        <input
          type="text"
          autoComplete="true"
          value={searchValue}
          onChange={handleSearchValue}
        ></input>
        <button type="submit">Search</button>
      </form>
      {filmsList.length > 0 && <MoviesList movies={filmsList} />}
    </Content>
  );
};
export default MoviesPage;
