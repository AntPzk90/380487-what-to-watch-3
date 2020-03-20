import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withMovieInfo = (Component) => {
  class WithMovieInfo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };
    }

    componentDidUpdate(prevProps) {
      if (this.props.showFilmCard) {
        if (prevProps.showFilmCard !== this.props.showFilmCard) {
          this.setState({isLoading: false});
        }
      }
    }

    componentDidMount() {
      if (this.props.showFilmCard) {
        this.setState({isLoading: false});
      }
    }

    render() {

      if (this.state.isLoading) {
        return <div>Загрузка...</div>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithMovieInfo.propTypes = {
    showFilmCard: PropTypes.object
  };

  return WithMovieInfo;
};

export default withMovieInfo;
