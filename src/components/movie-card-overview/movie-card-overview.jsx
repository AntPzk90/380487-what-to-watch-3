import React from 'react';
import PropTypes from 'prop-types';

const MovieCardOverview = (props) => {
  const {film} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
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
