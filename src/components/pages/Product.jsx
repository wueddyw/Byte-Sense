import React from 'react';
import StandardScanDetails from '../StandardScanDetails';
import ExpertScanDetails from '../ExpertScanDetails';
import '../../styles/product.css';
import ProductTopBanner from "../ProductTopBanner"
import Footer from "../Footer";



export default function Product() {
  return (
    <div className='productContainer'>
      <ProductTopBanner></ProductTopBanner>
      <h1>Byte Scan</h1>
      <div className='productbox' data-aos="fade-left">
        <div className = 'aboutProduct'>
          <StandardScanDetails></StandardScanDetails>
          <ExpertScanDetails></ExpertScanDetails>
        </div>
      </div>
      <Footer />
    </div>
  );
}
