import React from 'react';
import AuthApi from '../auth/api';

function request(){
  let form = document.getElementById("signin");
  let data = {"username": form.username.value, "password": form.password.value};
  AuthApi.signIn(data);
  form.reset();
}

let SignIn = (props)=> {
  return (
    <form id="signin">
      <h3>Sign In</h3>
      <input type="text" className="form-control" name="username" placeholder="Username" />
      <input type="password" className="form-control" name="password" placeholder="Password" />
      <input onClick={request} type="button" className="btn btn-primary" value="Sign In" />
    </form>
  )
}

export default SignIn;
