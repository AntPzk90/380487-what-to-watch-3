import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {

  const {film, onCardMouseEnter, showCardDetails} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onCardMouseEnter(film)} onClick={() => showCardDetails(film)}>
      <div className="small-movie-card__image">
        <img src={`img/${film.src}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={(evt) => {
        evt.preventDefault();
        showCardDetails(film);
      }}>
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  showCardDetails: PropTypes.func
};

export default MovieCard;
