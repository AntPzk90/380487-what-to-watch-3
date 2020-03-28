import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withLoadingIndicator = (Component) => {
  class WithLoadingIndicator extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };
    }

    componentDidUpdate(prevProps) {

      if (this.props.showFilmCard || this.props.filteredFilms || this.props.film) {
        if (prevProps.showFilmCard !== this.props.showFilmCard || prevProps.filteredFilms !== this.props.filteredFilms || prevProps.film !== this.props.film) {
          this.setState({isLoading: false});
        }
      }
    }

    componentDidMount() {
      if (this.props.showFilmCard || this.props.filteredFilms || this.props.film) {
        this.setState({isLoading: false});
      }
    }

    render() {

      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithLoadingIndicator.propTypes = {
    showFilmCard: PropTypes.object,
    filteredFilms: PropTypes.array,
    film: PropTypes.object
  };

  return WithLoadingIndicator;
};

export default withLoadingIndicator;
