import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';

const MovieInfo = (props) => {

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
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    titlePoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }),
  activePage: PropTypes.string.isRequired,
  onTabClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  showFilmCard: state.showFilmCard,
  activePage: state.activeTab,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(activeTab) {
    dispatch(ActionCreator.changeActiveTab(activeTab));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
