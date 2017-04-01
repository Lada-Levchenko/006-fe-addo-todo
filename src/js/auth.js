import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import AuthStore from './auth/store';
import AuthApi from './auth/api';

class Auth extends React.Component {
  constructor() {
    super();
    this.onAuthorized = this.onAuthorized.bind(this);
  }

  componentDidMount() {
    AuthStore.addEventListener('authorize', this.onAuthorized);
  }

  componentWillUnmount() {
    AuthStore.removeEventListener('authorize', this.onAuthorized);
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
