import React from 'react';
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

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
