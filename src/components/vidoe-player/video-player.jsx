import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video.jsx';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, isAutoplay, isMuted} = this.props;

    return (
      <video src={film.preview} poster={`img/${film.src}`}
        className="small-movie-card__image" autoPlay={isAutoplay ? `autoPlay` : ``} muted={isMuted ? `muted` : ``}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  isAutoplay: PropTypes.string.isRequired,
  isMuted: PropTypes.string.isRequired
};

export default withVideo(VideoPlayer);
