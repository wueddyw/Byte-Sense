import React from 'react';
import '../App.css';
import './HomeTopBanner.css';
import '../styles/product.css';
import Showcase from "../components/Showcase";
import ShowcaseImage from "../images/productpage.jpg";

export default function ProductTopBanner() {
    return (
      <>
  
        <Showcase image={ShowcaseImage} title="Product"/>
        
        
      </>
    );
  }