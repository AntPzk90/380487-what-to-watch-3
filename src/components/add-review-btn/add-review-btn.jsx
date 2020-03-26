import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../../const.js';
import history from '../../history.js';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

class AddReviewBtn extends PureComponent {
  constructor(props) {
    super(props);

    this.id = this.props.id;

    this._onAddReviewBtnClick = this._onAddReviewBtnClick.bind(this);
  }

  _onAddReviewBtnClick(evt) {
    evt.preventDefault();
    if (this.props.authorizationStatus === `NO_AUTH`) {
      history.push(AppRoute.LOGIN);
    } else {
      history.push(`${AppRoute.FILM}/${this.id}${AppRoute.REVIEW}`);
    }
  }

  render() {
    return (
      <a href="#" className="btn movie-card__button"
        onClick={this._onAddReviewBtnClick}
      >
        Add review
      </a>
    );
  }
}

AddReviewBtn.propTypes = {
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export default connect(mapStateToProps)(AddReviewBtn);
