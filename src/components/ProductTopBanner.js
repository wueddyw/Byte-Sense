import React from 'react';
import '../App.css';
import './HomeTopBanner.css';
import '../styles/product.css';

export default function ProductTopBanner() {
    return (
      <>
  
  
        <div className='product-top-banner'>
            <div className='product-top-banner-slogan'>
                Product
            </div>
            
            <div className='product-top-banner-sub-slogan'>
            <p>
            We are proud to launch our Cybersecurity Antivirus<br></br> 
            protection product that can safely monitor, scan,<br></br>
            capture data and report vulnerability activities.
            </p>
            </div>
        </div>
        
      </>
    );
  }