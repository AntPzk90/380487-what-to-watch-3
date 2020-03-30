import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isEmailInputValid: true
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleSubmitBtnClick = this.handleSubmitBtnClick.bind(this);
    }

    handleFormSubmit(loginValue, passwordValue) {

      const {onSubmit} = this.props;

      onSubmit({
        login: loginValue,
        password: passwordValue,
      });
    }

    handleSubmitBtnClick(ref) {
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
          onSendForm={this.handleFormSubmit}
          onSubmitBtnClick={this.handleSubmitBtnClick}
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
