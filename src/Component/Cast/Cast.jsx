import { useState, useEffect } from 'react';
import { getFilmInformationById } from '../../api/apiServices';
import DefaulImage from '../../images/noImage.png';
import { Card } from 'react-bootstrap';

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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              {item.profile_path ? (
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
                  alt={item?.name}
                />
              ) : (
                <Card.Img src={DefaulImage} alt="default" width="80px" />
              )}
              <h4>{item?.name}</h4>
              <p>Character: {item?.character}</p>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
