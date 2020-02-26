import React from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {

  const {onGenreClick, films, genreToFilter} = props;

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genreToFilter === `All genres` ? `catalog__genres-item--active` : ``}`}>
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onGenreClick(`All genres`);
          }}
          href="#"
          className="catalog__genres-link">All genres</a>
      </li>
      {films.map((it) => it.genre).filter((it, pos) => films.map((item) => item.genre).indexOf(it) === pos).map((itemGenre) => {
        return (
          <li className={`catalog__genres-item ${genreToFilter === itemGenre ? `catalog__genres-item--active` : ``}`} key={itemGenre}>
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(itemGenre);
              }}
              href="#"
              className="catalog__genres-link">{itemGenre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  onGenreClick: PropTypes.func,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired
  ),
  genreToFilter: PropTypes.string.isRequired,
};

export default GenresList;
