import React, {PureComponent, createRef} from 'react';
import history from '../../history.js';
import {convertationSecondsToTime} from '../../utils.js';
import {percentageProportion} from '../../const.js';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.playerRef = createRef();

      this.state = {
        isAutoplay: true,
        isPlaying: true,
        isPause: false,
        fullTime: null,
        isElepsed: 0,
        isControls: false,
      };

      this.handlePlayBtnClick = this.handlePlayBtnClick.bind(this);
      this.handleFullScreenBtnClick = this.handleFullScreenBtnClick.bind(this);
      this.initPlayer = this.initPlayer.bind(this);
      this.handelExitBtnClick = this.handelExitBtnClick.bind(this);
    }

    componentWillUnmount() {
      this.initPlayer().pause();

      this.setState({
        isPlaying: true,
        isPause: false,
        fullTime: null,
        isElepsed: 0,
      });

      this.initPlayer().removeEventListener(`canplaythrough`, ()=> {
        this.setState({
          fullTime: convertationSecondsToTime(Math.floor(this.initPlayer().duration)),
        });
      });

      this.initPlayer().removeEventListener(`timeupdate`, () => {
        this.setState({
          fullTime: convertationSecondsToTime(Math.floor(this.initPlayer().duration - this.initPlayer().currentTime)),
        });
        let fullTime = Math.floor(this.initPlayer().duration);
        let elapsedTime = Math.floor(this.initPlayer().currentTime);
        this.setState({
          isElepsed: Math.floor(elapsedTime / fullTime * percentageProportion)
        });
      });

    }

    componentDidMount() {

      this.initPlayer().addEventListener(`canplaythrough`, ()=> {
        this.setState({
          fullTime: convertationSecondsToTime(Math.floor(this.initPlayer().duration)),
        });
      });
      this.initPlayer().addEventListener(`timeupdate`, () => {
        this.setState({
          fullTime: convertationSecondsToTime(Math.floor(this.initPlayer().duration - this.initPlayer().currentTime)),
        });
        let fullTime = Math.floor(this.initPlayer().duration);
        let elapsedTime = Math.floor(this.initPlayer().currentTime);
        this.setState({
          isElepsed: Math.floor(elapsedTime / fullTime * percentageProportion)
        });
      });
    }

    initPlayer() {
      return this.playerRef.current;
    }

    handlePlayBtnClick() {
      if (this.state.isPause === true) {
        this.initPlayer().play();
        this.setState({
          isPlaying: true,
          isPause: false,
        });
      } else if (this.state.isPlaying === true) {
        this.initPlayer().pause();
        this.setState({
          isPlaying: false,
          isPause: true,
        });
      }
    }

    handleFullScreenBtnClick() {
      if (this.initPlayer().requestFullscreen) {
        this.initPlayer().requestFullscreen();
        document.onfullscreenchange = () => {
          this.setState({
            isControls: !this.state.isControls,
          });
        };
      } else if (this.initPlayer().mozRequestFullScreen) { /* Firefox */
        this.initPlayer().mozRequestFullScreen();
        document.onfullscreenchange = () => {
          this.setState({
            isControls: !this.state.isControls,
          });
        };
      } else if (this.initPlayer().webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        this.initPlayer().webkitRequestFullscreen();
        document.onfullscreenchange = () => {
          this.setState({
            isControls: !this.state.isControls,
          });
        };
      } else if (this.initPlayer().msRequestFullscreen) { /* IE/Edge */
        this.initPlayer().msRequestFullscreen();
        document.onfullscreenchange = () => {
          this.setState({
            isControls: !this.state.isControls,
          });
        };
      }
    }

    handelExitBtnClick() {
      this.initPlayer().pause();
      history.goBack();
    }

    render() {
      return (
        <Component
          {...this.props}
          isElepsed={this.state.isElepsed}
          isPlaying={this.state.isPlaying}
          isPause={this.state.isPause}
          fullTime={this.state.fullTime}
          isFullScreen={this.state.isFullScreen}
          isControls={this.state.isControls}
          onFullScreenCkick={this.handleFullScreenBtnClick}
          onPlayBtnClick={this.handlePlayBtnClick}
          playerRef={this.playerRef}
          onExitBtnClick={this.handelExitBtnClick}
        />
      );
    }
  }
  return WithPlayer;
};

export default withPlayer;
