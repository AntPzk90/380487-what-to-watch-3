import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import history from "../../history.js";
import {AppRoute, WidthComment} from "../../const.js";


const withAddRewiewPage = (Component) => {
  class WithAddRewiewPage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isBlocked: true,
        isShowMassege: false,
        isBlockedForm: false,
        isError: false,
      };

      this.sendReview = this.sendReview.bind(this);
      this.unblockForm = this.unblockForm.bind(this);
      this.changeComment = this.changeComment.bind(this);
      this.sendReview = this.sendReview.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(ratingNumber) {
      this.setState({
        rating: ratingNumber
      });
    }

    calcCommentLenght() {

      if (this.state.comment.length >= WidthComment.MIN && this.state.comment.length <= WidthComment.MAX) {
        this.setState({
          isBlocked: false
        });
      } else {
        this.setState({
          isBlocked: true
        });
      }
    }

    changeComment(evt) {
      this.setState({
        comment: evt.target.value,
        isShowMassege: true
      });
      this.calcCommentLenght();
    }

    blockForm() {
      this.setState({
        isBlockedForm: true,
      });
    }

    unblockForm() {
      this.setState({
        isBlockedForm: false,
      });
    }

    sendReview(evt, id, rating, comment) {
      evt.preventDefault();
      this.blockForm();
      this.props.handleSubmit(id, rating, comment)
        .then((res) => {
          if (res.status === 200) {
            this.unblockForm();
            history.push(`${AppRoute.FILM}/${id}`);
          } else {
            this.setState({
              isError: true,
            });
          }
        });
    }

    render() {

      return (
        <Component
          {...this.props}
          onFormSubmit={this.sendReview}
          isBlocked={this.state.isBlocked}
          isShowMassege = {this.state.isShowMassege}
          isBlockedForm = {this.state.isBlockedForm}
          isError = {this.state.isError}
          onInputComment = {this.changeComment}
          onChangeRating = {this.handleInputChange}
          rating = {this.state.rating}
          comment = {this.state.comment}
        />
      );
    }
  }

  WithAddRewiewPage.propTypes = {
    id: PropTypes.string.isRequired,
    showFilmCard: PropTypes.shape({
      name: PropTypes.string,
      poster: PropTypes.string,
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
    }).isRequired,
    handleSubmit: PropTypes.func,
  };

  return WithAddRewiewPage;
};

export default withAddRewiewPage;
