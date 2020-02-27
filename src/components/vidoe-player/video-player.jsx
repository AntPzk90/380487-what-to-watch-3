import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlay: false,
      isPause: false,
      isAutoplay: false,
      isMuted: false,
    };
  }

  componentDidMount() {
    this.setState({
      isAutoplay: true,
      isMuted: true
    });
  }

  render() {
    const {film} = this.props;
    return (
      <video src={film.preview} poster={`img/${film.src}`}
        className="small-movie-card__image"  autoPlay={this.state.isAutoplay ? `autoPlay` : ``} muted={this.state.isMuted ? `muted` : ``}>
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired
};

export default VideoPlayer;
