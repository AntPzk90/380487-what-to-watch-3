import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withFilmsList from '../../hocs/with-films-list/with-films-list.jsx';
import {getFavoriteFilms} from './../../reducer/data/selectors.js';
import {connect} from 'react-redux';

const FavoriteFilmsList = (props) => {
  const {onCardMouseEnter, favoriteFilms} = props;

  return (
    <div className="catalog__movies-list">
      {favoriteFilms.map((film) => {
        return (
          <MovieCard key={film.id}
            film={film}
            onCardMouseEnter={onCardMouseEnter}
          />
        );
      })}
    </div>
  );
};

FavoriteFilmsList.propTypes = {
  favoritefilms: PropTypes.arrayOf(
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
  onCardMouseEnter: PropTypes.func,
  onMovieCardClick: PropTypes.func,
  favoriteFilms: PropTypes.array,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export default connect(mapStateToProps)(withFilmsList(FavoriteFilmsList));
