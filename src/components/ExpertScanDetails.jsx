import React from "react";

export default function ExpertScanDetails(props) {

  return (
    <div className="expert">
      <h2>Expert Level Byte Scan 1.0 </h2>
      <ul>
        <li>Scan your computer and server </li>
        <li>Scan malicious and vulnerabilities </li>
        <li>Export reports in PDF and CSV files formats</li>
        <li>Capture vulnerability IP addresses and location</li>
        <li>Monitor live system traffic activities and remote any malicious virus</li>
        <button onClick={() => props.passedFunction(props.product[1]['_id'])}>Add to Cart</button>
      </ul>
    </div>
  );
}