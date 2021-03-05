import './components/FontAwesomeIcons';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import News from './components/pages/News';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact';
import StandardScan from './components/pages/StandardScan';
import ExpertScan from './components/pages/ExpertScan';
import ManagedDetectionResponse from './components/pages/Managed-Detection-and-Response';
import CustomBuiltApps from './components/pages/CustomBuiltApps';
import CombinedAI from './components/pages/CombinedAI';
import ThreatMonitoring from './components/pages/ThreatMonitoring';
import AOS from "aos";
import "aos/dist/aos.css"

function ExtraStep() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
        <Route path='/Managed-Detection-and-Response' component={ManagedDetectionResponse}/>
        <Route path='/Custom-Built-Applications' component={CustomBuiltApps}/>
        <Route path='/Combined-AI-and-Expert-Threat-Intelligence' component={CombinedAI} />
        <Route path='/Threat-Monitoring' component={ThreatMonitoring} />
      </Switch>
    </Router>
  );
}

export default ExtraStep;
