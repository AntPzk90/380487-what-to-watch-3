import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './../movie-card/movie-card.jsx';
import withFilmsList from './../../hocs/with-films-list/with-films-list.jsx';
import {connect} from 'react-redux';
import {getGenre} from './../../reducer/data/selectors.js';

const FilmsList = (props) => {
  const {onCardMouseEnter, filteredFilms, count} = props;

  return (
    <div className="catalog__movies-list">
      {filteredFilms.slice(0, count).map((film) => {
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

FilmsList.propTypes = {
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        poster: PropTypes.string,
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
      })
  ),
  onCardMouseEnter: PropTypes.func,
  onMovieCardClick: PropTypes.func,
  count: PropTypes.number,
};

const mapStateToProps = (state) => ({
  genreToFilter: getGenre(state),
});

export default connect(mapStateToProps)(withFilmsList(FilmsList));
