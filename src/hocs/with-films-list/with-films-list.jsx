import React, {PureComponent} from 'react';

const withFilmsList = (Component) => {
  class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };
      this.changeState = this.changeState.bind(this);
    }

    changeState(film) {
      this.setState({
        film
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          film={this.state.film}
          onCardMouseEnter={this.changeState}
        />
      );
    }
  }

  return WithFilmsList;
};

export default withFilmsList;
