import React from 'react';
import '../../App.css';
import '../../styles/services.css'
import OneService from '../ServicesPage/one.jsx';
import TwoService from '../ServicesPage/two.jsx';
import ThreeService from '../ServicesPage/three.jsx';
import FourService from '../ServicesPage/four.jsx';

export default function Services() {
  return (
    <div>
      <header id="header-services">
        <h3>Services</h3>
      </header>
      <OneService />
      <TwoService />
      <ThreeService />
      <FourService />
    </div>
  );
}
