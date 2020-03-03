import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './../movie-card/movie-card.jsx';
import withFilmsList from './../../hocs/with-films-list/with-films-list.jsx';
import {connect} from 'react-redux';

const FilmsList = (props) => {

  const {films, genreToFilter, onCardMouseEnter} = props;

  const filteredFilms = (filterFilms, filterGenre) => {
    switch (filterGenre) {
      case `All genres`:
        return filterFilms;
      default:
        return filterFilms.filter((it) => it.genre === filterGenre);
    }
  };

  return (
    <div className="catalog__movies-list">
      {filteredFilms(films, genreToFilter).map((film) => {
        return (
          <MovieCard key={film.title}
            film={film}
            onCardMouseEnter={onCardMouseEnter}
          />
        );
      })}
    </div>
  );
};

FilmsList.propTypes = {
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
  onCardMouseEnter: PropTypes.func,
  onMovieCardClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genreToFilter: state.genre,
});

export default connect(mapStateToProps)(withFilmsList(FilmsList));
