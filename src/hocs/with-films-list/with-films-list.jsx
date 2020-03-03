import React, {PureComponent} from 'react';

const withFilmsList = (Component) => {
  class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        film: null,
      };
      this._onCardMouseEnter = this._onCardMouseEnter.bind(this);
    }

    _onCardMouseEnter(film) {
      this.setState({
        film
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          film={this.state.film}
          onCardMouseEnter={this._onCardMouseEnter}
        />
      );
    }
  }

  return WithFilmsList;
};

export default withFilmsList;
