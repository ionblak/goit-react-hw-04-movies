import { useEffect, useState } from 'react';
import { getFilmById } from '../api/apiServices';
import Content from '../Component/Content';
import MovieCard from '../Component/MoviesCard';
import { Button } from 'react-bootstrap';
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
      <Button variant="secondary" onClick={handleGoBack}>
        Go back
      </Button>
      {movie?.title ? (
        <MovieCard movie={movie} />
      ) : (
        <Loader type="Rings" color="#000" height={80} width={80} />
      )}
    </Content>
  );
};
export default MovieDetailsPage;
