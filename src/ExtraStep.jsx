import './components/FontAwesomeIcons';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
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
import AOS from "aos";
import Register from "./components/pages/Register";
import "aos/dist/aos.css"
import ReactGa from 'react-ga'


function ExtraStep() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    ReactGa.initialize('UA-194679122-1')
    ReactGa.pageview(window.location.pathname + window.location.search) 
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Services' component={Services} />
        <Route path='/Product' component={Product} />
        <Route path='/News' component={News} />
        <Route path='/Career' component={Career} />
        <Route path='/Contact' component={Contact} />
        <Route path = '/StandardScan' component={StandardScan}/>
        <Route path = '/ExpertScan' component={ExpertScan}/>
        <Route path='/Login' component={Login} />
        <Route path='/Cart' component={Cart} />
      </Switch>
        <Route path="/Register" component={Register} />
    </Router>
  );
}

export default ExtraStep;
