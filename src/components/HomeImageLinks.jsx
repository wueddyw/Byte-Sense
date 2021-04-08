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
  <div className="top-bar-header">
    <div className="what-we-do what-we-do-override" data-aos="fade-left">
      <div className="text-right text_move-fix">
        Services
      </div>
    </div>
  </div>



  <div className="frame">

    <span className="helper">
      
    </span>
    <img className="image-link home-image-links-1"  src={managedImage} alt="exp"/>
    <img className="image-link home-image-links-2"  src={threatImage} alt="exp"/>
    <img className="image-link home-image-links-3"  src={artificialImage} alt="exp"/>
    <img className="image-link home-image-links-4"  src={customImage} alt="exp"/>
  </div>
  {/* <div className="blue-bar"></div>    */}

        </>
      );
    }
    
    
    
export default HomeImageLinks;