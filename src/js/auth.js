import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import AuthStore from './auth/store';
import AuthApi from './auth/api';
import $ from 'jquery';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onAuthorized = this.onAuthorized.bind(this);
  }

  componentDidMount() {
    AuthStore.addEventListener('authorize', this.onAuthorized);
  }

  componentWillUnmount() {
    AuthStore.removeEventListener('authorize', this.onAuthorized);
  }

  onAuthorized() {
    this.state.username = AuthStore.getUsername();
    $("username").html(this.state.username); //doesn't work!!!
    this.props.method();
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
