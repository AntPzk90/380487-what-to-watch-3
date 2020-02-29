import React, {PureComponent} from 'react';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlay: false,
        isPause: false,
        isAutoplay: true,
        isMuted: true,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlay={this.state.isPlay}
          isPause={this.state.isPause}
          isAutoplay={this.state.isAutoplay}
          isMuted={this.state.isMuted}
        />
      );
    }
  }

  return WithVideo;
};

export default withVideo;
