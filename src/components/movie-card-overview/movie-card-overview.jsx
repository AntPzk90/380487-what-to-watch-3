import React from 'react';
import PropTypes from 'prop-types';

const MovieCardOverview = (props) => {

  const {film} = props;

  const getStatus = (rating) => {

    if (rating === 0 && rating <= 3) {
      return `Bad`;
    } else
    if (rating > 3 && rating <= 5) {
      return `Normal`;
    } else
    if (rating > 5 && rating <= 8) {
      return `Good`;
    } else {
      return `Very good`;
    }
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
        <span className="movie-rating__level">{getStatus(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieCardOverview.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    description: PropTypes.string,
  })
};

export default MovieCardOverview;
