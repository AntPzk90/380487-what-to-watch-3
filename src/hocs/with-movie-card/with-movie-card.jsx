import React, {PureComponent} from 'react';

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

    handleCardMouseHover() {
      this.timer = setTimeout(() => {
        this.setState(({isPlay}) => {
          return {isPlay: !isPlay};
        });
      }, 1000);
    }

    handleCardMouseLeave() {
      this.setState(({isPlay}) => {
        return {isPlay: !isPlay};
      });
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
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
