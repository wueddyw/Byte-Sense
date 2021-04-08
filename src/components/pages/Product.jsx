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
      
      <div class="our-story aos-init aos-animate" data-aos="fade-up">
        <div>
          <h3>Byte Scan</h3>
        </div>
        <div>
        <p>
          We are proud to launch our Cybersecurity Antivirus
          protection product that can safely monitor, scan,
          capture data and report vulnerability activities.
        </p>
        </div>
      </div> 
      <div className='productbox' data-aos="fade-left">
        <div className='aboutProduct'>
          <StandardScanDetails />
          <ExpertScanDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
}
