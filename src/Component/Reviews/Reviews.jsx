import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { getFilmInformationById } from '../../api/apiServices';
import { Card } from 'react-bootstrap';

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
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <h4>Author: {item.author}</h4>
                  <p>{item.content}</p>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <p>Dont have reviews</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default withRouter(Reviews);
