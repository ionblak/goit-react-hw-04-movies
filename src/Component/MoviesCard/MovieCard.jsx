import routes from '../../routes';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import DefaulImage from '../../images/noImage.png';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navLink: {
    color: 'black',
    marginRight: '20px',
    '&:hover': {
      color: 'orange',
      textDecoration: 'none',
    },
  },
  isActive: {
    color: 'orange',
  },
});

const MovieCard = ({ movie, match, location }) => {
  const classes = useStyles();

  return (
    <>
      <Card style={{ width: '18rem' }}>
        {movie.poster_path ? (
          <img
            src={`${routes.imgUrl}${movie?.poster_path}`}
            alt="film"
            width="300px"
          />
        ) : (
          <img src={DefaulImage} alt="default" width="300px" />
        )}
        <Card.Body>
          <Card.Title>
            {movie?.title} ({movie?.release_date.slice(0, 4)})
          </Card.Title>
          <Card.Text>User Scope: {movie?.vote_average * 10}%</Card.Text>
          <Card.Title>Overview</Card.Title>
          <Card.Text>{movie?.overview}</Card.Text>
          <Card.Title>Genres</Card.Title>
          <Card.Text>
            {movie?.genres.map(({ name, id }) => (
              <span key={id}>{name} </span>
            ))}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>Additional information</Card.Title>

          <NavLink
            className={classes.navLink}
            activeClassName={classes.isActive}
            to={{
              pathname: `${match.url}${routes.cast}`,
              state: { from: location.state.from },
            }}
          >
            Cast
          </NavLink>

          <NavLink
            className={classes.navLink}
            activeClassName={classes.isActive}
            to={{
              pathname: `${match.url}${routes.reviews}`,
              state: { from: location.state.from },
            }}
          >
            Reviews
          </NavLink>
        </Card.Body>
      </Card>
      <Route path={`${match.path}${routes.cast}`} component={Cast} />
      <Route path={`${match.path}${routes.reviews}`} component={Reviews} />
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }),
};

export default withRouter(MovieCard);
