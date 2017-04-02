import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import AuthStore from './auth/store';
import AuthApi from './auth/api';
import AuthActions from './auth/actions';

class Auth extends React.Component {
  constructor() {
    super();
    this.onAuthorized = this.onAuthorized.bind(this);
  }

  componentDidMount() {
    AuthStore.addEventListener(AuthActions.AUTHORIZE, this.onAuthorized);
  }

  componentWillUnmount() {
    AuthStore.removeEventListener(AuthActions.AUTHORIZE, this.onAuthorized);
  }

  onAuthorized() {
    this.props.method(AuthStore.getUsername());
  }

  render() {
    return (
      <div>
        <SignIn />
        <br />
        <SignUp />
      </div>
    );
  }
}

export default Auth;
