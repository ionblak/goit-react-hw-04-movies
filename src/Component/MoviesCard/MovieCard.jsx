import routes from '../../routes';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import DefaulImage from '../../images/noImage.png';

const MovieCard = ({ movie, match, location }) => {
  return (
    <>
      <div>
        {movie.poster_path ? (
          <img
            src={`${routes.imgUrl}${movie?.poster_path}`}
            alt="film"
            width="300px"
          />
        ) : (
          <img src={DefaulImage} alt="default" width="300px" />
        )}

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
            <NavLink
              to={{
                pathname: `${match.url}${routes.cast}`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}${routes.reviews}`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Route path={`${match.path}${routes.cast}`} component={Cast} />
      <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
    </>
  );
};

export default withRouter(MovieCard);
