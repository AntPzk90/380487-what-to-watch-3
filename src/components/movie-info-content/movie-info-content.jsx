import React from 'react';
import PropTypes from 'prop-types';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';

const MovieInfoContent = (props) => {
  const {activePage, film} = props;
  switch (activePage) {
    case `overview`:
      return (
        <MovieCardOverview
          film={film}
        />
      );
    case `details`:
      return (
        <MovieCardDetails
          film={film}
        />
      );
    case `reviews`:
      return (
        <MovieCardReviews
          film={film}
        />
      );
    default :
      return (
        <MovieCardOverview
          film={film}
        />
      );
  }
};

MovieInfoContent.propTypes = {
  activePage: PropTypes.string,
  film: PropTypes.object,
};

export default MovieInfoContent;
