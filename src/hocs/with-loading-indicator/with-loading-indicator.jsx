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

      if (this.props.showFilmCard || this.props.filteredFilms) {
        if (prevProps.showFilmCard !== this.props.showFilmCard || prevProps.filteredFilms !== this.props.filteredFilms) {
          this.setState({isLoading: false});
        }
      }
    }

    componentDidMount() {
      if (this.props.showFilmCard || this.props.filteredFilms) {
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
    showFilmCard: PropTypes.object
  };

  return WithLoadingIndicator;
};

export default withLoadingIndicator;
