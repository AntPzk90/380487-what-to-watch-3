import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/application/application.js';

const GenresList = (props) => {

  const {onGenreLinkClick, films, genreToFilter} = props;
  const genres = Array.from(new Set(films.map((it) => it.genre)));
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${genreToFilter === `All genres` ? `catalog__genres-item--active` : ``}`}>
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onGenreLinkClick(`All genres`);
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
                onGenreLinkClick(itemGenre);
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
  onGenreLinkClick: PropTypes.func,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewImage: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,
        decription: PropTypes.string,
        rating: PropTypes.number,
        scoresCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.array,
        genre: PropTypes.string,
        released: PropTypes.number,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        videoLink: PropTypes.string,
        previewVideoLink: PropTypes.string
      }).isRequired
  ),
  genreToFilter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  genreToFilter: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick(filterGenre) {
    dispatch(ActionCreator.filterByName(filterGenre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
