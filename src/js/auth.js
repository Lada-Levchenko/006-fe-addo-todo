import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';

class Auth extends React.Component {

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
