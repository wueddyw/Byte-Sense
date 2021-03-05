import React from 'react';
import '../../App.css';
import '../../styles/services.css'
import Service from '../ServicesPage/services.jsx';
import ServiceBlocks from '../ServicesPage/ServiceBlocks';
import ClickableServices from '../ServicesPage/ClickableServices';

export default function Services() {
  return (
    <div>
      <header id="header-services">
        <h3>Services</h3>
      </header>
      <Service/>
      <ServiceBlocks/>
      <ClickableServices/>
    </div>
  );
}
