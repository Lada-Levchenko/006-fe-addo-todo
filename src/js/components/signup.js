import React from 'react';

let SignUp = (props)=> {
  return (
    <form>
      <h3>Sign Up</h3>
      <input type="text" className="form-control" name="username" placeholder="Username" />
      <input type="password" className="form-control" name="password" placeholder="Password" />
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default SignUp;
