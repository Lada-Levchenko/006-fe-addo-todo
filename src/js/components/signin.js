import React from 'react';
import AuthApi from '../auth/api';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let data = {"username": this.state.username, "password": this.state.password};
    AuthApi.signIn(data);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <input type="text" className="form-control" name="username" onChange={this.handleInputChange} placeholder="Username" />
        <input type="password" className="form-control" name="password" onChange={this.handleInputChange} placeholder="Password" />
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
    );
  }
}

export default SignIn;
