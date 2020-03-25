import React, {PureComponent} from 'react';
import {getFilmForId} from '../../reducer/data/selectors.js';
import withLoadingIndicator from '../../hocs/with-loading-indicator/with-loading-indicator.jsx';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import withPlayer from '../../hocs/with-player/with-player.jsx';

class Player extends PureComponent {
  constructor(props){
    super(props)
  }

  render() {
    const {showFilmCard, isElepsed, isFullScreen, isPlaying, onPlayBtnClick, onFullScreenCkick, onExitBtnClick, fullTime, playerRef} = this.props;
    const {backgroundImage, videoLink, name} = showFilmCard;

    return (
      <div className="player">
        <video src={videoLink} className="player__video" poster={backgroundImage} ref={playerRef}/>
        <button type="button" className="player__exit"
          onClick={() => {onExitBtnClick()}}
        >Exit</button>
        {!isFullScreen
          ? <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value={isElepsed} max={100} />
                  <div className="player__toggler" style={{left: `${isElepsed}%`}}>Toggler</div>
                </div>
              <div className="player__time-value">{fullTime}</div>
              </div>
              <div className="player__controls-row">
                <button type="button" className="player__play"
                  onClick={() => {onPlayBtnClick()}}
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    {isPlaying
                      ? <use xlinkHref="#pause" />
                      : <use xlinkHref="#play-s" />
                    }
                  </svg>
                  <span>Play</span>
                </button>
                <div className="player__name">{name}</div>
                <button type="button" className="player__full-screen"
                  onClick={() => {onFullScreenCkick()}}
                >
                  <svg viewBox="0 0 27 27" width={27} height={27}>
                    <use xlinkHref="#full-screen" />
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          : ``
        }
      </div>
    )
  }
}

const mapStateToProps = (state, {id}) => ({
  showFilmCard: getFilmForId(state, id)
});

export default compose (
  connect(mapStateToProps),
  withLoadingIndicator,
  withPlayer)(Player);
