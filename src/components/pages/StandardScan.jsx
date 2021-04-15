import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import StandardScanDetails from '../StandardScanDetails';

export default function StandardScan() {
    return (
      <>
        <Navbar />
        <h1 className='standardScan'>Standard Byte Scan 1.0 </h1>
        <StandardScanDetails></StandardScanDetails>
       
      </>
    );
  }