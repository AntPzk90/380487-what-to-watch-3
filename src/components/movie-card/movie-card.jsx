import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../vidoe-player/video-player.jsx';
import withMovieCard from './../../hocs/with-movie-card/with-movie-card.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const MovieCard = (props) => {

  const {
    film,
    onCardMouseEnter,
    onCardMouseHover,
    onCardMouseLeave,
    onMovieCardClick,
    isPlay
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCardMouseEnter(film);
        onCardMouseHover();
      }}
      onClick={() => onMovieCardClick(film)}
      onMouseLeave={() => onCardMouseLeave()}>
      <div className="small-movie-card__image">
        {isPlay &&
          <VideoPlayer
            film={film}
          />
        }
        {isPlay ||
          <img src={`img/${film.src}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
        }
      </div>
      <h3 className="small-movie-card__title" onClick={(evt) => {
        evt.preventDefault();
        onMovieCardClick(film);
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
    poster: PropTypes.string.isRequired,
    titlePoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  onCardMouseHover: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  onMovieCardClick: PropTypes.func,
  isPlay: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(film) {
    dispatch(ActionCreator.showFilmCard(film));
  }
});

export default connect(null, mapDispatchToProps)(withMovieCard(MovieCard));
