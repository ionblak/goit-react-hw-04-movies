import { useEffect, useState } from 'react';
import { getFilmById } from '../api/apiServices';
import Content from '../Component/Content';

const MovieDetailsPage = ({ match }) => {
  const { id } = match.params;

const [movie, setMovie] = useState(null);

  useEffect(() => {
    getFilmById(id).then(data => setMovie(data));
  }, [id]);

  return (
    
  <Content>
  <button type='button'>Go back</button>
  <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt='film'/>
  <h2>{movie?.title} ({movie?.release_date})</h2>
  <h3>Overview</h3>
  <p>{movie?.overview}</p>
  <h3>Genres</h3>
  <p>{movie?.genres.map(({name,id})=> <span key={id}>{name} </span>)}</p>
  
  </Content>);
};
export default MovieDetailsPage;
