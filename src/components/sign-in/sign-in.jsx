import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getErrorStatus} from '../../reducer/user/selectors';
import Logo from '../logo/logo.jsx';
import {Redirect, Link} from 'react-router-dom';
import withSignIn from '../../hocs/with-sign-in/with-sign-in.jsx';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
  }

  render() {
    const {
      authorizationStatus,
      error,
      onSendForm,
      onSubmitBtnClick,
      isEmailInputValid
    } = this.props;

    if (authorizationStatus === `AUTH`) {
      return <Redirect to="/" />;
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form"
            onSubmit={(evt)=>{
              evt.preventDefault();
              onSendForm(this.loginRef.current.value, this.passwordRef.current.value);
            }}
          >
            {error || !isEmailInputValid
              ? <div className="sign-in__message">
                {!isEmailInputValid
                  ? <p>Please enter a valid email address</p>
                  : <p>We can’t recognize this email
                    and password combination. Please try again.</p>
                }
              </div>
              : ``
            }
            <div className="sign-in__fields">
              <div className={`sign-in__field" ${!isEmailInputValid ? `sign-in__field--error` : ``}`}>
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                  ref={this.loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
                  ref={this.passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit"
                onClick={()=>{
                  onSubmitBtnClick(this.loginRef.current);
                }}
              >Sign in</button>
            </div>
          </form>
        </div>
        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func,
  authorizationStatus: PropTypes.string,
  error: PropTypes.bool,
  onSendForm: PropTypes.func,
  onSubmitBtnClick: PropTypes.func,
  isEmailInputValid: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  error: getErrorStatus(state),

});

export default connect(mapStateToProps)(withSignIn(SignIn));
