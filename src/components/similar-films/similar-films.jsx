import React from 'react';
import PropTypes from 'prop-types';
import {getAllFilms} from './../../reducer/data/selectors.js';
import {connect} from 'react-redux';
import withFilmsList from '../../hocs/with-films-list/with-films-list.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import {SIMILAR_FILMS_COUNT} from '../../const.js';

const SimilarFilms = (props) => {
  const {similarFilms, onCardMouseEnter} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
        {similarFilms.slice(0, SIMILAR_FILMS_COUNT).map((film) => {
          return (
            <MovieCard key={film.id}
              film={film}
              onCardMouseEnter={onCardMouseEnter}
            />
          );
        })}
      </div>
    </section>
  );
};

SimilarFilms.propTypes = {
  similarFilms: PropTypes.arrayOf(
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
};

const mapStateToProps = (state, {genre}) => ({
  similarFilms: getAllFilms(state).filter((it) => it.genre === genre)
});

export default connect(mapStateToProps)(withFilmsList(SimilarFilms));
