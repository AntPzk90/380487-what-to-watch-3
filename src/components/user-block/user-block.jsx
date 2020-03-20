import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Link} from 'react-router-dom';
import {AppRoute} from "../../const.js";

const UserBlock = (props) => {
  const {authorizationStatus} = props;
  return (
    <div className="user-block">
      { authorizationStatus === `AUTH` ?
        <Link to={AppRoute.MYLIST}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </Link>
        :
        <Link to='/login' className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
  };
};

export default connect(mapStateToProps)(UserBlock);
