import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../vidoe-player/video-player.jsx';
import withMovieCard from './../../hocs/with-movie-card/with-movie-card.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/application/application.js';
import history from "../../history.js";
import {Link} from 'react-router-dom';
import {AppRoute} from "../../const.js";

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
      <div className="small-movie-card__image"
      onClick={() => {history.push(`${AppRoute.FILM}/${film.id}`)}}
      >
        {isPlay &&
          <VideoPlayer
            film={film}
          />
        }
        {isPlay ||
          <img src={film.poster} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
        }
      </div>
      <h3 className="small-movie-card__title" onClick={(evt) => {
        evt.preventDefault();
        onMovieCardClick(film);
      }}>
        <Link to={`${AppRoute.FILM}/${film.id}`} className="small-movie-card__link" href="movie-page.html">{film.name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
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
