import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {connect} from 'react-redux';
import {getReviews} from '../../reducer/data/selectors.js';
import moment from 'moment';
import withLoadingIndicator from '../../hocs/with-loading-indicator/with-loading-indicator.jsx';

class MovieCardReviews extends PureComponent {
  constructor(props) {
    super(props);

  }

  callReviewsDispatch() {
    const {
      film,
      getAllReviews
    } = this.props;

    const {id} = film;

    getAllReviews(id);
  }

  componentDidUpdate(prevProps) {

    if (this.props.film.id) {
      if (prevProps.film.id !== this.props.film.id) {
        this.callReviewsDispatch();
        this.setState({isLoading: false});
      }
    }
  }

  componentDidMount() {

    this.callReviewsDispatch();

    if (this.props.film.id) {
      this.setState({isLoading: false});
    }
  }

  render() {

    const {reviews} = this.props;

    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((review) => (
              <div
                key={review.user.id}
                className="review"
              >
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={moment(new Date(review.date)).format(`MM-dd-YY`)}>{moment(new Date(review.date)).format(`MMMM D, YYYY`)}</time>
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

export default connect(mapStateToProps, mapDispatchToProps)(withLoadingIndicator(MovieCardReviews));
