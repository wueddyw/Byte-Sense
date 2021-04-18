import './components/FontAwesomeIcons';
import React, { useEffect, Component, PropTypes } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';

import { Switch, Route, useLocation } from 'react-router-dom';
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
import ConfirmPage from "./components/pages/Confirmation";
import AOS from "aos";
import { getFromStorage, setInStorage } from "./utils/storage";
import "aos/dist/aos.css"
import ReactGa from 'react-ga'

function usePageViews(){
  let location = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if(!window.GA_INITIALIZED){
      ReactGa.initialize('UA-194679122-1')
      window.GA_INITIALIZED = true;
    }
    ReactGa.set({page:location.pathname})
    ReactGa.pageview(location.pathname) 
  }, [location]);
}

function ExtraStep() {
  usePageViews();

  return (
    <main>
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
        <Route path="/Confirm" component={ConfirmPage}/>
      </Switch>
        <Route path="/Register" component={Register} />
    </main>
  );
  }


export default ExtraStep;
