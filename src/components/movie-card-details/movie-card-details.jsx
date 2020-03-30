import React from 'react';
import PropTypes from 'prop-types';
import {convertationMinutesToTime} from '../../utils.js';

const MovieCardDetails = (props) => {

  const {film} = props;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">Wes Andreson</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((it) => {
                return (<span key={it}>{it} <br /></span>);
              })
              }
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{convertationMinutesToTime(film.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

MovieCardDetails.propTypes = {
  film: PropTypes.shape({
    starring: PropTypes.array,
    genre: PropTypes.string,
    released: PropTypes.number,
    runTime: PropTypes.number,
  }),
};

export default MovieCardDetails;
