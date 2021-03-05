import React, { useState } from 'react';

import './HomeProducts.css';
import productStandard from '../images/Product.png';
import productExpert from '../images/Product.png';



function HomeProducts(props) {

  
    return  (


      <>
      <div className="hBreaker">
          Products
      </div>
      <div className="grid-holder-outside">
        <div className="grid-holder-inside">
            <div className="grid-control">
                <div className="grid-top-left">

                    <div className="hcenter">
                        <div className="flex-center">
                            <img className="product-top-left" src={productStandard} alt="exp"/>
                        </div>
                    </div>

                    
                </div>
                <div className="grid-top-right">

                        <ul  className="flex-center">
                            <li><div className="title-header"><b>Standard Byte Scan 1.0</b></div></li>
                            <li>Scan your computer and server</li>
                            <li>Scan malicious and vulnerabilities</li>
                            <li>Export reports in PDF / CSV format</li>
                        </ul>




                    </div>
                <div className="grid-bottom-left">

                <ul  className="float-right flex-center">
                <li><div className="title-header"><b>Expert Level Byte Scan 1.0</b></div></li>
                <li>Scan your computer and server</li>
                <li>Scan malicious and vulnerabilities</li>
                <li>Export reports in PDF / CSV format</li>
                <li><b>Capture vulnerability IP addresses</b></li>
                <li><b>Monitor live system traffic activities</b></li>
                        </ul>

                </div>
                <div className="grid-bottom-right">
                    <div className="flex-center">
                        <img className="product-top-left" src={productExpert} alt="exp"/>
                    </div>
                </div>
            </div>
        </div>
      </div>


      </>
    );
  }
  
  
  
export default HomeProducts;