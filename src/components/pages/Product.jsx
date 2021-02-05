import React from 'react';
import Products from './Career';
import StandardScanDetails from '../StandardScanDetails';
import ExpertScanDetails from '../ExpertScanDetails';

export default function Consulting() {
  return (
    <>
      <h1 className='product'>Products</h1>
      <StandardScanDetails></StandardScanDetails>
      <ExpertScanDetails></ExpertScanDetails>
      <div className = "productPic"></div>
    </>
  );
}
