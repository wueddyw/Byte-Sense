import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { getFromStorage, setInStorage } from "../utils/storage";

class RegisterDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      token: "",
      signUpError: "",
      signUpFirstName: "",
      signUpLastName: "",
      signUpEmail: "",
      signUpPassword: "",
      redirect: false,
    };

    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(
      this
    );
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(
      this
    );
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(
      this
    );
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(
      this
    );
    this.onSignUp = this.onSignUp.bind(this);
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

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      redirect,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // POST request
    fetch("http://localhost:9000/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((res) => res.json())
      .then((json) => {

        if (json.success) {
          this.setState({
            signUpError: json.message,
          });

          // POST request
          fetch("http://localhost:9000/api/account/signin", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: signUpEmail,
              password: signUpPassword,
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.success) {
                setInStorage("ByteSense", { token: json.token });
                this.setState({
                  isLoading: false,
                  isLoggedIn: true,
                  signUpFirstName: "",
                  signUpLastName: "",
                  signUpEmail: "",
                  signUpPassword: "",
                  token: json.token,
                  redirect: true,
                });
              } else {
                this.setState({
                  signInError: json.message,
                  isLoading: false,
                });
              }
            });
        } else {
          this.setState({
            signUpError: json.message,
          });
        }
      });
  }

  render() {
    const {
      isLoading,
      token,
      signUpError,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      redirect,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }

    if (!token) {
      return (
        <div className="register-wrapper">
          <div className="register-container" data-aos={this.props.direction}>
            <div>
              <h3>{this.props.title}</h3>
            </div>

            <div className="register">
              <form>
                <div className="field-name">
                  <label for="firstName">{this.props.fieldName1}</label>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={signUpFirstName}
                    onChange={this.onTextboxChangeSignUpFirstName}
                  />
                </div>

                <div className="field-name">
                  <label for="lastName">{this.props.fieldName2}</label>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={signUpLastName}
                    onChange={this.onTextboxChangeSignUpLastName}
                  />
                </div>

                <div className="field-name">
                  <label for="email">{this.props.fieldName3}</label>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={signUpEmail}
                    onChange={this.onTextboxChangeSignUpEmail}
                  />
                </div>

                <div className="field-name">
                  <div>
                    <label for="password">{this.props.fieldName4}</label>
                  </div>
                </div>

                <div className="field">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={signUpPassword}
                    onChange={this.onTextboxChangeSignUpPassword}
                  />
                </div>

                <div>
                  <button type="button" onClick={this.onSignUp}>
                    Sign Up
                  </button>
                </div>

                <div className="route-link">
                  <Link to="./Login">Already have an account? Login</Link>
                </div>
              </form>
          		<div className="signin-error">{signUpError ? <p>{signUpError}</p> : null}</div>
            </div>
          </div>

        </div>
      );
    }

		return (
			<div>
				<p>Signed in</p>
			</div>
		)
  }
}

export default RegisterDiv;
