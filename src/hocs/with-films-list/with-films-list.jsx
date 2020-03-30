import React, {PureComponent} from 'react';

const withFilmsList = (Component) => {
  class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };
      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
    }

    handleCardMouseEnter(film) {
      this.setState({
        film
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          film={this.state.film}
          onCardMouseEnter={this.handleCardMouseEnter}
        />
      );
    }
  }

  return WithFilmsList;
};

export default withFilmsList;
