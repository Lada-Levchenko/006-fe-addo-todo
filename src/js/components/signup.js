import React from 'react';
import AuthApi from '../auth/api';

function request(){
  let form = document.getElementById("signup");
  let data = {"username": form.username.value, "password": form.password.value};
  AuthApi.signUp(data);
  form.reset();
}

let SignUp = (props)=> {
  return (
    <form id="signup">
      <h3>Sign Up</h3>
      <input type="text" className="form-control" name="username" placeholder="Username" />
      <input type="password" className="form-control" name="password" placeholder="Password" />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default SignUp;
