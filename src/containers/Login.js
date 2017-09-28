import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="lander">
          <h1>Login</h1>
          <div>
            <p><a href="/auth/linkedin" className="btn btn-social btn-linkedin">Login with LinkedIn</a></p>
            <p><a href="/auth/github" className="btn btn-social btn-github">Login with Github</a></p>
            <p><a href="/auth/facebook" className="btn btn-social btn-facebook">Login with Facebook</a></p>
            <p><a href="/auth/twitter" className="btn btn-social btn-twitter">Login with Twitter</a></p>
          </div>
        </div>
      </div>
    );
  }
}
