import { useState, useEffect } from 'react';
import { getFilmInformationById } from '../../api/apiServices';

const CAST_URL = 'credits';

const Cast = ({ match }) => {
  const [castList, setCastList] = useState([]);
  useEffect(() => {
    const { movieId } = match.params;
    getFilmInformationById(movieId, CAST_URL).then(({ cast }) =>
      setCastList(cast),
    );
  }, [match.params]);

  return (
    <ul>
      {castList.map(item => (
        <li key={item?.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
            alt={item?.name}
            width="80px"
          />
          <h2>{item?.name}</h2>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
