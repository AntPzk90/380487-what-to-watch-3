import React, {PureComponent, createRef} from 'react';
import history from '../../history.js';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props){
      super(props)

      this.playerRef = createRef();

      this.state = {
        isPlaying: false,
        isPause: true,
        fullTime: null,
        isElepsed: 0,
        isFullScreen: false,
      }
      this.onPlayBtnClick = this.onPlayBtnClick.bind(this)
      this.onFullScreenCkick = this.onFullScreenCkick.bind(this);
      this.initPlayer = this.initPlayer.bind(this);
      this.onExitBtnClick = this.onExitBtnClick.bind(this);
    }

    convertationSecondsToTime(time) {
      let fulltime = 0,
          h = Math.floor(time / (60 * 60)),
          dm = time % (60 * 60),
          m = Math.floor(dm / 60),
          ds = dm % 60,
          s = Math.ceil(ds);
      if (s === 60) {
          s = 0;
          m = m + 1;
      }
      if (s < 10) {
          s = '0' + s;
      }
      if (m === 60) {
          m = 0;
          h = h + 1;
      }
      if (m < 10) {
          m = '0' + m;
      }
      if (h === 0) {
          fulltime = m + ':' + s;
      } else {
          fulltime = h + ':' + m + ':' + s;
      }
      return fulltime;
    }

    initPlayer() {
      return this.playerRef.current;
    }

    componentDidMount() {

      document.addEventListener('keydown',(evt) => {
        if(evt.key === "Escape"){
          this.setState({
            isFullScreen: false
          });
        }
      });
      this.initPlayer().addEventListener('canplaythrough', ()=> {
        this.setState({
          fullTime: this.convertationSecondsToTime(Math.floor(this.initPlayer().duration)),
        });
      });
      this.initPlayer().addEventListener('timeupdate', () => {
        this.setState({
          fullTime: this.convertationSecondsToTime(Math.floor(this.initPlayer().currentTime)),
        });
      });
    }

    componentWillUnmount() {
      document.removeEventListener('keydown',(evt) => {
        if(evt.key === "Escape"){
          this.setState({
            isFullScreen: false
          });
        }
      });
    }

    onPlayBtnClick() {
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

      this.initPlayer().addEventListener('timeupdate', () => {
        let fullTime = Math.floor(this.initPlayer().duration);
        let elapsedTime = Math.floor(this.initPlayer().currentTime)
        this.setState({
          isElepsed: Math.floor(elapsedTime/fullTime * 100)
        });
      });

    }

    onFullScreenCkick() {
      this.setState({
        isFullScreen: true,
      });
    }

    onExitBtnClick() {
      this.initPlayer().pause();
      history.goBack();
    }

    render() {
      return(
        <Component
          {...this.props}
          isElepsed={this.state.isElepsed}
          isPlaying={this.state.isPlaying}
          isPause={this.state.isPause}
          fullTime={this.state.fullTime}
          isFullScreen={this.state.isFullScreen}
          onFullScreenCkick={this.onFullScreenCkick}
          onPlayBtnClick={this.onPlayBtnClick}
          playerRef={this.playerRef}
          onExitBtnClick={this.onExitBtnClick}
        />
      );
    }
  }
  return WithPlayer;
}

export default withPlayer;
