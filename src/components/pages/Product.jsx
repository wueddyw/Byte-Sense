import React from 'react';
import StandardScanDetails from '../StandardScanDetails';
import ExpertScanDetails from '../ExpertScanDetails';
import '../../styles/product.css';
import ProductTopBanner from "../ProductTopBanner"



export default function Product() {
  return (
    <div className='productContainer'>
      <ProductTopBanner></ProductTopBanner>
      <div className='productbox' data-aos="fade-left">
        <div className = 'aboutProduct'>
          <StandardScanDetails></StandardScanDetails>
          <ExpertScanDetails></ExpertScanDetails>
        </div>
      </div>
      
    </div>
  );
}
