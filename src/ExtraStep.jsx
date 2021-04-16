import './components/FontAwesomeIcons';
import React, { useEffect, Component, PropTypes } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from "react-router";
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import News from './components/pages/News';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import StandardScan from './components/pages/StandardScan';
import ExpertScan from './components/pages/ExpertScan';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';
import Register from "./components/pages/Register";
import AOS from "aos";
import { getFromStorage, setInStorage } from "./utils/storage";
import "aos/dist/aos.css"


class ExtraStep extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoggedIn: false
    // };

    // this.onChangeLogin = this.onChangeLogin.bind(this);
  }

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

  // onChangeLogin(loginStatus) {
  //   this.setState({
  //     isLoggedIn: loginStatus
  //   });
  //   console.log("extrasteps isLoggedIn: " + this.isLoggedIn);
  // }

  

  render() {
    // const {
    //   isLoggedIn
    // } = this.state;
    
    return (
      <Router>
        {/* <Navbar changeLogin={this.onChangeLogin.bind(this)} loginStatus={this.state.isLoggedIn}/> */}
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Services' component={Services} />
          <Route path='/Product' component={Product} />
          <Route path='/News' component={News} />
          <Route path='/Career' component={Career} />
          <Route path='/Contact' component={Contact} />
          <Route path='/StandardScan' component={StandardScan}/>
          <Route path='/ExpertScan' component={ExpertScan}/>
          {/* <Route path='/Login' component={Login} changeLogin={this.onChangeLogin.bind(this)} /> */}
          <Route path='/Login' component={Login} />
          <Route path='/Cart' component={Cart} />
        </Switch>
          <Route path="/Register" component={Register} />
      </Router>
    );
  }
}

export default ExtraStep;
