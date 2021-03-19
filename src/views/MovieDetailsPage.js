import { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { getFilmById } from '../api/apiServices';
import Content from '../Component/Content';
import Cast from '../Component/Cast';
import Reviews from '../Component/Reviews';
import routes from '../routes';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MovieDetailsPage = ({ match, history, location }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { movieId } = match.params;

    getFilmById(movieId).then(data => setMovie(data));
  }, [match.params]);

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <Content>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie?.title ? (
        <div>
          <img src={`${routes.imgUrl}${movie?.poster_path}`} alt="film" />
          <h2>
            {movie?.title} ({movie?.release_date})
          </h2>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie?.genres.map(({ name, id }) => (
              <span key={id}>{name} </span>
            ))}
          </p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`${match.url}${routes.cast}`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}${routes.reviews}`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <Loader type="Rings" color="#000" height={80} width={80} />
      )}

      <Route path={`${match.path}${routes.cast}`} component={Cast} />
      <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
    </Content>
  );
};
export default MovieDetailsPage;
