import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';
import {getShowFilmsCard, getActiveTab} from '../../reducer/application/selectors.js';

const MovieInfo = (props) => {
  console.log(props)
  const {activePage, showFilmCard, onTabClick} = props;
  switch (activePage) {
    case `overview`:
      return (
        <MovieCardOverview
          film={showFilmCard}
          changeActivePage={onTabClick}
        />
      );
    case `details`:
      return (
        <MovieCardDetails
          film={showFilmCard}
          changeActivePage = {onTabClick}
        />
      );
    case `reviews`:
      return (
        <MovieCardReviews
          film={showFilmCard}
          changeActivePage = {onTabClick}
        />
      );
    default :
      return (
        <MovieCardOverview
          film={showFilmCard}
          changeActivePage = {onTabClick}
        />
      );
  }
};

MovieInfo.propTypes = {
  showFilmCard: PropTypes.shape({
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
  }),
  activePage: PropTypes.string.isRequired,
  onTabClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  activePage: getActiveTab(state),
  showFilmCard: getShowFilmsCard(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(activeTab) {
    dispatch(ActionCreator.changeActiveTab(activeTab));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
