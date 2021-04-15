import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import ExpertScanDetails from '../ExpertScanDetails';

export default function ExpertScan() {
    return (
      <>
        <Navbar />
        <h1 className='expertScan'>Expert Level Byte Scan 1.0 </h1>
        <ExpertScanDetails></ExpertScanDetails>
        
      </>
    );
  }