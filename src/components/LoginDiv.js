import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getFromStorage, getInStorage } from "../utils/storage";

class LoginDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: ""
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
		this.onSignIn = this.onSignIn.bind(this);
  }

	componentWillMount(){
    const token = getFromStorage("the_main_app") // ???
    
    // // Verify token
    if (token) {
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        })
    } else {
      this.setState({
        isLoading: false
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

	onSignIn() {
		// Grab state
		const {
			signInEmail,
			signInPassword
		} = this.state;

		console.log(signInEmail);

		// POST request
		fetch("http://localhost:9000/api/account/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword
			}),
		}).then(res => res.json())
			.then(json => {
				this.setState({
					signInError: json.message
				});
			});
	}

  // function LoginDiv(props) {

  // goToRegister = () =>
  // {
  //   let path = "./pages/register";
  //   let history = useHistory();
  //   history.push(path);
  // }

  render() {

		const {
			token,
			signInError,
			signInEmail,
			signInPassword
		} = this.state;

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
                <button type="button" onClick={this.onSignIn}>Sign in</button>
              </div>

              <div>
                <a href="/">Forgot password?</a>
              </div>

              <div className="route-link">
                <Link to="./Register">
                  New user? Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginDiv;
