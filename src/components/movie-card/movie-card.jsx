import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../vidoe-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false
    };
    this._cardHoverHandler = this._cardHoverHandler.bind(this);
    this._cardMouseLeaveHandler = this._cardMouseLeaveHandler.bind(this);
  }

  _cardHoverHandler() {
    setTimeout(() => {
      this.setState(({isPlay}) => {
        return {isPlay: !isPlay};
      });
    }, 1000);
  }

  _cardMouseLeaveHandler() {
    this.setState(({isPlay}) => {
      return {isPlay: !isPlay};
    });
  }

  render() {
    const {film, onCardMouseEnter, showCardOverview} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          onCardMouseEnter(film);
          this._cardHoverHandler();
        }}
        onClick={() => showCardOverview(film)}
        onMouseLeave={() => this._cardMouseLeaveHandler()}>
        <div className="small-movie-card__image">
          {this.state.isPlay &&
            <VideoPlayer
              film={film}
            />
          }
          {this.state.isPlay ||
            <img src={`img/${film.src}`} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
          }
        </div>
        <h3 className="small-movie-card__title" onClick={(evt) => {
          evt.preventDefault();
          showCardOverview(film);
        }}>
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onCardMouseEnter: PropTypes.func,
  showCardOverview: PropTypes.func
};

export default MovieCard;
