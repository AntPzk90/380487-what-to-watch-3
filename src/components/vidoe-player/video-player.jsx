import React from 'react';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video.jsx';

const VideoPlayer = (props) => {
  const {film, isAutoplay, isMuted} = props;

  return (
    <video src={film.previewVideoLink} poster={`img/${film.poster}`}
      className="small-movie-card__image" autoPlay={isAutoplay ? `autoPlay` : ``} muted={isMuted ? `muted` : ``}>
    </video>
  );
};

VideoPlayer.propTypes = {
  film: PropTypes.shape({
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
  }),
  isAutoplay: PropTypes.bool,
  isMuted: PropTypes.bool
};

export default withVideo(VideoPlayer);
