import React, { useState, Component } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { getFromStorage, setInStorage } from "../utils/storage";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isLoading: true,
      isLoggedIn: false,
      logoutError: "",
      click: false,
      dropdown: false,
    };

    this.onLogout = this.onLogout.bind(this);
    this.setClick = this.setClick.bind(this);
    this.setDropdown = this.setDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  setClick = (clickState) => {
    this.setState(
      prevState => ({ click: clickState })
    )
  };

  setDropdown = (dropdownState) => {
    this.setState(
      prevState => ({ dropdown: dropdownState })
    )
  };

  handleClick = () => this.setClick(!this.click);
  closeMobileMenu = () => this.setClick(false);

  onMouseEnter = () => {
    if (window.innerWidth < 1500) {
      this.setDropdown(false);
    } else {
      this.setDropdown(true);
    }
  };

  onMouseLeave = () => {
    if (window.innerWidth < 1500) {
      this.setDropdown(false);
    } else {
      this.setDropdown(false);
    }
  };

  // onChangeLogin() {
  //   this.props.changeLogin(this.state.isLoggedIn);
  // }

  componentDidMount() {
    const token = getFromStorage("ByteSense").token;
    console.log("Token = " + token);

    // Check if token is set to load login or logout in navbar
    if (token) {
      // Verify token
      fetch("http://localhost:9000/api/account/verify?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          console.log("Token: " + token);
          if (json.success) {
            this.setState({
              token,
              isLoading: false,
              isLoggedIn: true,
            });
            this.forceUpdate();
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onLogout() {
    this.setState({
      isLoading: true,
    });

    // GET request
    const obj = getFromStorage("ByteSense");
    
    if (obj && obj.token) {
      const token = obj.token;

      // Verify token
      fetch("http://localhost:9000/api/account/logout?token=" + token)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false,
              isLoggedIn: false
            });
            setInStorage("ByteSense", { token: null });
            // this.onChangeLogin().bind(this);
            // this.onChangeLogin();
            this.forceUpdate();
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

  render() {
    const { 
      token,
      isLoading, 
      isLoggedIn, 
      logoutError, 
      click,
      dropdown
    } = this.state;

    return (
      <>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            ByteSense
            <i class="fab fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={this.click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li
              className="nav-item"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
              <Link
                to="/Product"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Product
              </Link>
              {this.dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <Link to="/News" className="nav-links" onClick={this.closeMobileMenu}>
                News
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Career"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={this.closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Cart" className="nav-links" onClick={this.closeMobileMenu}>
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <div class="lang-menu">
                <div class="selected-lang">English</div>
                <ul>
                  <li>
                    <a>Chinese</a>
                  </li>
                </ul>
              </div>
            </li>

            {isLoggedIn ? (
              <li className="nav-item">
                <Link to="/" className="nav-links"
                  onClick={() => {
                    this.closeMobileMenu();
                    this.onLogout();
                  }}>Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/Login" className="nav-links"
                  onClick={this.closeMobileMenu}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </>
    );
  }
}
export default Navbar;
