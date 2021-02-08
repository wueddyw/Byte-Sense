import { render } from '@testing-library/react';
import React from 'react';
import Showcase from "../Showcase"
import TextDiv from "../TextDiv"
import ImageTextDiv from "../ImageTextDiv"
import FourDivs from "../FourDivs"
import Footer from "../Footer"
import Copyright from "../Copyright"
import '../../App.css';
import '../../styles/about.css'

export default function ContactUs() {
    return (
      <div className="wrapper">
        {/* <Navbar /> */}
        <Showcase />
        <TextDiv />
        <ImageTextDiv />
        <FourDivs />
        <Footer />
        <Copyright />
      </div>
    );
  // return <h1 className='contact-us'>CONTACT</h1>;
}