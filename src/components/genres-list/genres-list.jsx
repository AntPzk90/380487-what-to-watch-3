import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const GenresList = (props) => {

  const {onGenreClick, films, genreToFilter} = props;
  const genres = Array.from(new Set(films.map((it) => it.genre)));
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
      { genres.map((itemGenre) => {
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
        poster: PropTypes.string.isRequired,
        titlePoster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
      }).isRequired
  ),
  genreToFilter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genreToFilter: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(filterGenre) {
    dispatch(ActionCreator.filterByName(filterGenre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
