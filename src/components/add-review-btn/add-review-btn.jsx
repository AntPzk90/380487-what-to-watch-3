import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../../const.js';
import {getFilmForId} from '../../reducer/data/selectors.js';
import history from '../../history.js';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

class AddReviewBtn extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAddReviewBtnClick = this.handleAddReviewBtnClick.bind(this);
  }

  handleAddReviewBtnClick(evt) {
    evt.preventDefault();
    if (this.props.authorizationStatus === `NO_AUTH`) {
      history.push(AppRoute.LOGIN);
    } else {
      history.push(`${AppRoute.FILM}/${this.props.showFilmCard.id}${AppRoute.REVIEW}`);
    }
  }

  render() {

    return (
      <a href="#" className="btn movie-card__button"
        onClick={this.handleAddReviewBtnClick}
      >
        Add review
      </a>
    );
  }
}

AddReviewBtn.propTypes = {
  showFilmCard: PropTypes.object,
  id: PropTypes.number,
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state, {id}) => ({
  showFilmCard: getFilmForId(state, id),
  authorizationStatus: getAuthorizationStatus(state),
});


export default connect(mapStateToProps)(AddReviewBtn);
