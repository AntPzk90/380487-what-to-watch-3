import React, {PureComponent, createRef} from 'react'

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props){
      super(props)
      this.loginRef = createRef();
      this.passwordRef = createRef();

      this.state = {
        isEmailInputValid: true
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkValidEmail = this.checkValidEmail.bind(this);
    }

    handleSubmit(login, password) {
      const {onSubmit} = this.props;

      onSubmit({
        login: login,
        password: password,
      });
    }

    checkValidEmail(ref) {
      if (!ref.validity.valid) {
        this.setState({
          isEmailInputValid: false
        })
      } else {
        this.setState({
          isEmailInputValid: true
        })
      }
    }

    render() {
      return(
        <Component
          {...this.props}
          handleSubmit={this.handleSubmit}
          checkValidEmail={this.checkValidEmail}
          isEmailInputValid={this.state.isEmailInputValid}
          loginRef={this.loginRef}
          password={this.passwordRef}
        />
      );
    }
  }
  return WithSignIn;
}

export default withSignIn;
