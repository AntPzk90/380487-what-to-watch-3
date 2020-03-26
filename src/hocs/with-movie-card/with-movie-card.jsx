import React, {PureComponent} from 'react';

const withMovieCard = (Component) => {
  class WithMovieCard extends PureComponent {
    constructor(props) {
      super(props);
      // this.timer = null;

      this.state = {
        isPlay: false,
      };
      this.changeStatusMouseHover = this.changeStatusMouseHover.bind(this);
      this.changeStatusMouseLeave = this.changeStatusMouseLeave.bind(this);
    }

    changeStatusMouseHover() {
      setTimeout(() => {
        this.setState(({isPlay}) => {
          return {isPlay: !isPlay};
        });
      }, 1000);
    }

    changeStatusMouseLeave() {
      this.setState(({isPlay}) => {
        return {isPlay: !isPlay};
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onCardMouseHover={this.changeStatusMouseHover}
          onCardMouseLeave={this.changeStatusMouseLeave}
          isPlay={this.state.isPlay}
        />
      );
    }
  }

  return WithMovieCard;
};

export default withMovieCard;
