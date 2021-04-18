import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { getFromStorage, setInStorage } from "../utils/storage";

class LoginDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      isLoggedIn: false,
      redirect: false,
    };

    // this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    const token = getFromStorage("ByteSense");

    // If token is set
    if (token) {
      // Verify token
      fetch("/api/account/verify?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  // onChangeLogin() {
  //   this.props.changeLogin(this.state.isLoggedIn);
  // }

  onSignIn() {
    // Grab state
    const { signInEmail, signInPassword } = this.state;

    this.setState({
      isLoading: true,
    });

    // POST request
    fetch("http://localhost:9000/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        if (json.success) {
          setInStorage("ByteSense", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            isLoggedIn: true,
            signInPassword: "",
            signInEmail: "",
            token: json.token,
            redirect: true,
          });
          // this.onChangeLogin.bind(this);
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  render() {
    const {
      token,
      isLoading,
      isLoggedIn,
      signInError,
      signInEmail,
      signInPassword,
      redirect,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    // if (!token) {
      return (
        <div className="login-wrapper">
          <div className="login-container" data-aos={this.props.direction}>
            <div>
              <h3>{this.props.title}</h3>
            </div>

            <div className="login">
              <form>
                <div className="field-name">
                  <label for="email">{this.props.fieldName1}</label>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={signInEmail}
                    onChange={this.onTextboxChangeSignInEmail}
                  />
                </div>

                <div className="field-name">
                  <div>
                    <label for="password">{this.props.fieldName2}</label>
                  </div>
                </div>

                <div className="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={signInPassword}
                    onChange={this.onTextboxChangeSignInPassword}
                  />
                </div>

                <div>
                  <button type="button" onClick={this.onSignIn}>
                    Sign in
                  </button>
                </div>

                <div>
                  <a href="/">Forgot password?</a>
                </div>

                <div className="route-link">
                  <Link to="./Register">New user? Create an account</Link>
                </div>
              </form>
              <div className="signin-error">{signInError ? <p>{signInError}</p> : null}</div>
            </div>
          </div>

        </div>
      );
    // }

    return (
      <div>
        <p>Signed in</p>
      </div>
    )
  }
}

export default LoginDiv;
