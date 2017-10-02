import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="lander">
          <h1>Login</h1>
          <div>
            <p><a href="/auth/linkedin" className="btn btn-social btn-linkedin"><span class="fa fa-linkedin"></span> Sign in with LinkedIn</a></p>
            <p><a href="/auth/github" className="btn btn-social btn-github"><span class="fa fa-github"></span> Sign in with Github</a></p>
            <p><a href="/auth/facebook" className="btn btn-social btn-facebook"><span class="fa fa-facebook"></span> Sign in with Facebook</a></p>
            <p><a href="/auth/twitter" className="btn btn-social btn-twitter"><span class="fa fa-twitter"></span> Sign in with Twitter</a></p>
          </div>
        </div>
      </div>
    );
  }
}
