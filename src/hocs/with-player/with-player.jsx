import React, {PureComponent, createRef} from 'react';
import history from '../../history.js';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.playerRef = createRef();

      this.state = {
        isPlaying: true,
        isPause: false,
        fullTime: null,
        isElepsed: 0,
        isFullScreen: false,
      };

      this.startPlay = this.startPlay.bind(this);
      this.fullScreenOn = this.fullScreenOn.bind(this);
      this.initPlayer = this.initPlayer.bind(this);
      this.exitPlayer = this.exitPlayer.bind(this);
    }

    convertationSecondsToTime(time) {
      let fulltime = 0;
      let h = Math.floor(time / (60 * 60));
      let dm = time % (60 * 60);
      let m = Math.floor(dm / 60);
      let ds = dm % 60;
      let s = Math.ceil(ds);
      if (s === 60) {
        s = 0;
        m = m + 1;
      }
      if (s < 10) {
        s = `0` + s;
      }
      if (m === 60) {
        m = 0;
        h = h + 1;
      }
      if (m < 10) {
        m = `0` + m;
      }
      if (h === 0) {
        fulltime = m + `:` + s;
      } else {
        fulltime = h + `:` + m + `:` + s;
      }
      return fulltime;
    }

    initPlayer() {
      return this.playerRef.current;
    }

    componentDidMount() {

      document.addEventListener(`keydown`, (evt) => {
        if (evt.key === `Escape`) {
          this.setState({
            isFullScreen: false
          });
        }
      });
      this.initPlayer().addEventListener(`canplaythrough`, ()=> {
        this.setState({
          fullTime: this.convertationSecondsToTime(Math.floor(this.initPlayer().duration)),
        });
      });
      this.initPlayer().addEventListener(`timeupdate`, () => {
        this.setState({
          fullTime: this.convertationSecondsToTime(Math.floor(this.initPlayer().currentTime)),
        });
      });
    }


    startPlay() {
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

      this.initPlayer().addEventListener(`timeupdate`, () => {
        let fullTime = Math.floor(this.initPlayer().duration);
        let elapsedTime = Math.floor(this.initPlayer().currentTime);
        this.setState({
          isElepsed: Math.floor(elapsedTime / fullTime * 100)
        });
      });

    }

    componentWillUnmount() {

      document.removeEventListener(`keydown`, (evt) => {
        if (evt.key === `Escape`) {
          this.setState({
            isFullScreen: false
          });
        }
      });

      this.initPlayer().pause();
      this.setState({
        isPlaying: false,
        isPause: true,
      });

    }

    fullScreenOn() {
      this.setState({
        isFullScreen: true,
      });
    }

    exitPlayer() {
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
          onFullScreenCkick={this.fullScreenOn}
          onPlayBtnClick={this.startPlay}
          playerRef={this.playerRef}
          onExitBtnClick={this.exitPlayer}
        />
      );
    }
  }
  return WithPlayer;
};

export default withPlayer;
