import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {connect} from 'react-redux';
import {getReviews} from '../../reducer/data/selectors.js';
import moment from 'moment';
import withLoadingIndicator from '../../hocs/with-loading-indicator/with-loading-indicator.jsx';
import withMovieCardReviews from '../../hocs/with-movie-card-reviews/with-movie-card-reviews.jsx';

class MovieCardReviews extends PureComponent {
  constructor(props) {
    super(props);

  }

  // splittingArray() {
  //   this.props.reviews.forEach((it, i) => {
  //     if(i % 2 === 0){
  //       this.leftColumn.push(it);
  //     } else {
  //       this.rightColumn.push(it)
  //     }
  //   })
  // };

  // componentDidMount() {

  //   this.leftColumn = [];
  //   this.rightColumn = [];
  //   console.log(this.rightColumn)
  //   const {
  //     film,
  //     getAllReviews
  //   } = this.props;

  //   const {id} = film;

  //   getAllReviews(id);

  // }

  render() {

    const{leftColumn, rightColumn} = this.props;

    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {leftColumn.map((review) => (
              <div
                key={review.user.id}
                className="review"
              >
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={moment(new Date(review.date)).format(`MM-dd-YY`)}>{moment(new Date(review.date)).format(`MMMM d, YYYY`)}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{review.rating}</div>
              </div>))}
          </div>

          <div className="movie-card__reviews-col">
            {rightColumn.map((review) => (
              <div
                key={review.user.id}
                className="review"
              >
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={moment(new Date(review.date)).format(`MM-dd-YY`)}>{moment(new Date(review.date)).format(`MMMM d, YYYY`)}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{review.rating}</div>
              </div>))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MovieCardReviews.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        }),
        rating: PropTypes.number,
        comment: PropTypes.string,
        date: PropTypes.string,
      })
  ),
  getAllReviews: PropTypes.func,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: (id) => dispatch(DataOperation.getAllReviews(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withMovieCardReviews(MovieCardReviews));
