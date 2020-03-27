import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withMain = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        count: 8,
        isShowBtn: true
      };

      this.changeCountFilms = this.changeCountFilms.bind(this);
    }

    componentDidUpdate() {

      const {filteredFilms} = this.props;

      if (this.state.count >= 25) {
        this.setState({
          count: filteredFilms.length,
          isShowBtn: false
        });
      }
    }

    changeCountFilms() {

      const {filteredFilms} = this.props;

      if (this.state.count >= filteredFilms.length) {
        this.setState({
          count: filteredFilms.length,
          isShowBtn: false
        });
      }

      this.setState({
        count: this.state.count + 8
      });

    }

    render() {
      return (
        <Component
          {...this.props}
          onShowMoreBtnClick={this.changeCountFilms}
          count={this.state.count}
          isShowBtn={this.state.isShowBtn}
        />
      );
    }
  }

  WithMain.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          poster: PropTypes.string.isRequired,
          previewImage: PropTypes.string,
          backgroundImage: PropTypes.string,
          backgroundColor: PropTypes.string,
          decription: PropTypes.string,
          rating: PropTypes.number,
          scoresCount: PropTypes.number,
          director: PropTypes.string,
          starring: PropTypes.array,
          genre: PropTypes.string,
          released: PropTypes.number,
          id: PropTypes.number,
          isFavorite: PropTypes.bool,
          videoLink: PropTypes.string,
          previewVideoLink: PropTypes.string
        }).isRequired
    ),
  };

  return WithMain;
};

export default withMain;
