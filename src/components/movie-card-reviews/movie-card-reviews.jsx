import React, { PureComponent } from 'react';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {connect} from 'react-redux';
import {getReviews} from '../../reducer/data/selectors.js';
import moment from 'moment';

class MovieCardReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.film;
    this.props.getAllReviews(id);
  }

  render() {
    const {reviews} = this.props;
    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((review, i) => (
            <div
            key={i}
            className="review">
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
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllReviews: (id) => dispatch(DataOperation.getAllReviews(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardReviews);
