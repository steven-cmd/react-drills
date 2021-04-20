import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleUsernameChange(e)}></input>
        <input onChange={(e) => this.handlePasswordChange(e)}></input>
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}

export default Login;
