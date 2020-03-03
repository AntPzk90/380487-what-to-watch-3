import React, {PureComponent} from 'react';

const withMovieCard = (Component) => {
  class WithMovieCard extends PureComponent {
    constructor(props) {
      super(props);
      // this.timer = null;

      this.state = {
        isPlay: false,
      };
      this._onCardMouseHover = this._onCardMouseHover.bind(this);
      this._onCardMouseLeave = this._onCardMouseLeave.bind(this);
    }

    _onCardMouseHover() {
      setTimeout(() => {
        this.setState(({isPlay}) => {
          return {isPlay: !isPlay};
        });
      }, 1000);
    }

    _onCardMouseLeave() {
      this.setState(({isPlay}) => {
        return {isPlay: !isPlay};
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onCardMouseHover={this._onCardMouseHover}
          onCardMouseLeave={this._onCardMouseLeave}
          isPlay={this.state.isPlay}
        />
      );
    }
  }

  return WithMovieCard;
};

export default withMovieCard;
