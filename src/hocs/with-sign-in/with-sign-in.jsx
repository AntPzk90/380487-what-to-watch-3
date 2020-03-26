import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isEmailInputValid: true
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkValidEmail = this.checkValidEmail.bind(this);
    }

    handleSubmit(loginValue, passwordValue) {
      const {onSubmit} = this.props;

      onSubmit({
        login: loginValue,
        password: passwordValue,
      });
    }

    checkValidEmail(ref) {
      if (!ref.validity.valid) {
        this.setState({
          isEmailInputValid: false
        });
      } else {
        this.setState({
          isEmailInputValid: true
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSendForm={this.handleSubmit}
          onSubmitBtnClick={this.checkValidEmail}
          isEmailInputValid={this.state.isEmailInputValid}
          loginRef={this.loginRef}
          password={this.passwordRef}
        />
      );
    }
  }

  WithSignIn.propTypes = {
    onSubmit: PropTypes.func
  };

  return WithSignIn;
};

export default withSignIn;
