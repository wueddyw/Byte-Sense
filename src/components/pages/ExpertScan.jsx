import React from 'react';
import '../../App.css';
import ExpertScanDetails from '../ExpertScanDetails';

export default function ExpertScan() {
    return (
      <>
        <h1 className='expertScan'>Expert Level Byte Scan 1.0 </h1>
        <ExpertScanDetails></ExpertScanDetails>
        <div className = "productPic"></div>
      </>
    );
  }