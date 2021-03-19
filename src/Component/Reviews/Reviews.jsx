import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { getFilmInformationById } from '../../api/apiServices';

const REVIEWS_URL = 'reviews';

const Reviews = ({ match }) => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const { movieId } = match.params;
    getFilmInformationById(movieId, REVIEWS_URL).then(({ results }) =>
      setReviewsList(results),
    );
  }, [match.params]);

  return (
    <>
      {reviewsList.length > 0 ? (
        <ul>
          {reviewsList.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Dont have reviews</p>
      )}
    </>
  );
};
export default withRouter(Reviews);
