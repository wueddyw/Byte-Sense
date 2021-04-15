import React, { useState } from 'react';

import './HomeProducts.css';
import productStandard from '../images/Product.png';
import productExpert from '../images/Product.png';

import backgroundImage from '../images/backGroundBlur1.jpg';

function HomeProducts(props) {

//     const backGroundImageStyle={
//      backgroundImage: "url(" + backgroundImage + ")"
//   };


    return  (


      <>
      
        <div className="hBreaker">
          <div className="what-we-do what-we-do-override" data-aos="fade-left">
            <div className="text-right text_move-fix">
                Products
            </div>
        </div>
      </div>
      <div className="grid-holder-outside" >
        <div className="grid-holder-inside">
            <div className="grid-control" /*style ={backGroundImageStyle}*/>
                <div className="grid-top-left">

                    <div className="hcenter">
                        <div className="flex-center">
                            <img className="product-top-left" src={productStandard} alt="exp"/>
                        </div>
                    </div>

                    
                </div>
                <div className="grid-top-right">



                    <div className="what-we-do what-we-do-override" data-aos="fade-left">
                        <div className="text-right text_move-fix">
                            <ul  className="flex-center">
                                <li><div className="title-header"><b><u>Standard Byte Scan 1.0</u></b></div></li>
                                <li className="home-title-body">-Scan your computer and server</li>
                                <li className="home-title-body">-Scan malicious and vulnerabilities</li>
                                <li className="home-title-body">-Export reports in PDF / CSV format</li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className="grid-bottom-left">


                <div className="what-we-do what-we-do-override" data-aos="fade-right">
                    <div className="text-right text_move-fix">
                        <ul  className="float-right flex-center">
                            <li><div className="title-header"><b><u>Expert Level Byte Scan 1.0</u></b></div></li>
                            <li className="home-title-body">-Scan your computer and server</li>
                            <li className="home-title-body">-Scan malicious and vulnerabilities</li>
                            <li className="home-title-body">-Export in PDF / CSV format</li>
                            <li className="home-title-body">-<b>Capture vulnerable IPs</b></li>
                            <li className="home-title-body">-<b>Monitor live system traffic</b></li>
                        </ul>
                    </div>
                </div>


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