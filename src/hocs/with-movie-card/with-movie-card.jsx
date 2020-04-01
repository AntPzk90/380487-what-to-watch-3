import React, {PureComponent} from 'react';
import {secondsDelay} from '../../utils.js'

const withMovieCard = (Component) => {
  class WithMovieCard extends PureComponent {
    constructor(props) {
      super(props);
      this.timer = null;

      this.state = {
        isPlay: false,
      };
      this.handleCardMouseHover = this.handleCardMouseHover.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    handleCardMouseHover() {
      this.timer = setTimeout(() => {
        this.setState(({isPlay}) => {
          return {isPlay: !isPlay};
        });
      }, secondsDelay);
    }

    handleCardMouseLeave() {
      this.setState(({isPlay}) => {
        return {isPlay: !isPlay};
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onCardMouseHover={this.handleCardMouseHover}
          onCardMouseLeave={this.handleCardMouseLeave}
          isPlay={this.state.isPlay}
        />
      );
    }
  }

  return WithMovieCard;
};

export default withMovieCard;
