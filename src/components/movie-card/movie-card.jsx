import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {

  const {film, onCardMouseEnter} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onCardMouseEnter(film)}>
      <div className="small-movie-card__image">
        <img src={`img/${film.src}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
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
};

export default MovieCard;
