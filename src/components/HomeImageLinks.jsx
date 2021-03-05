import React, { useState } from 'react';

import './HomeImageLinks.css';
import managedImage from '../images/home/home-managed.png';
import threatImage from '../images/home/home-threat.png';
import artificialImage from '../images/home/home-artificial.png';
import customImage from '../images/home/home-custom.png';

function HomeImageLinks(props) {

  
      return  (
  
  
        <>
  

{/* <div className="blue-bar"></div> */}
<div className="top-bar-header">Services</div>
  <div className="frame">

    <span className="helper">
      
    </span>
    <img className="image-link"  src={managedImage} alt="exp"/>
    <img className="image-link"  src={threatImage} alt="exp"/>
    <img className="image-link"  src={artificialImage} alt="exp"/>
    <img className="image-link"  src={customImage} alt="exp"/>
  </div>
  <div className="blue-bar"></div>   

        </>
      );
    }
    
    
    
export default HomeImageLinks;