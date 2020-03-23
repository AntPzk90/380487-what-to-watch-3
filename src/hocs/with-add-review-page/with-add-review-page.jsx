import React, {PureComponent} from 'react';
import history from "../../history.js";
import {AppRoute} from "../../const.js";

const withAddRewiewPage = (Component) => {
  class WithAddRewiewPage extends PureComponent {
    constructor(props){
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isBlocked : true,
        isShowMassege: false,
        isBlockedForm: false,
        isError: false,
      };

      this.sendReview = this.sendReview.bind(this);
      this.unblockForm = this.unblockForm.bind(this);
      this.onChangeComment = this.onChangeComment.bind(this);
      this.sendReview = this.sendReview.bind(this);
      this.onChangeRating = this.onChangeRating.bind(this);
    }

    onChangeRating(rating) {
      this.setState({
        rating: rating
      });
    };

    calcCommentLenght() {

      if (this.state.comment.length >= 50 && this.state.comment.length <= 400) {
        console.log(this.state.comment.length)
        this.setState({
          isBlocked: false
        });
      } else {
        this.setState({
          isBlocked: true
        });
      }
    }

    onChangeComment(evt) {
      this.setState({
        comment: evt.target.value,
        isShowMassege: true
      });
      this.calcCommentLenght();
    };

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
      console.log(rating, comment)
      evt.preventDefault();
      this.blockForm();
      this.props.handleSubmit(id, rating, comment)
        .then((res) => { if (res.status === 200) {
          this.unblockForm,
          history.push(`${AppRoute.FILM}/${id}`)
        } else {
          this.setState({
            isError: true,
          })
        }}
      );
    }

    render() {
      return(
        <Component
          {...this.props}
          sendReview = {this.sendReview}
          unblockForm = {this.unblockForm}
          isBlocked = {this.state.isBlocked}
          isShowMassege = {this.state.isShowMassege}
          isBlockedForm = {this.state.isBlockedForm}
          isError = {this.state.isError}
          onChangeComment = {this.onChangeComment}
          onChangeRating = {this.onChangeRating}
          rating = {this.state.rating}
          comment = {this.state.comment}
        />
      )
    }
  }

  return WithAddRewiewPage;
}

export default withAddRewiewPage;
