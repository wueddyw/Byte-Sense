import React from 'react';
import '../../App.css';
import '../../styles/services.css'
import Service from '../ServicesImageDivs';
import Footer from '../Footer.js';
import Banner from "../../images/services_back.jpg"
import Showcase from "../Showcase";

export default function Services() {
  return (
    <div className="service-body">
      <Showcase image={Banner} title="Services" text=""/>
      <Service/>
      <Footer/>
    </div>
  );
}
