import React from "react";

export default function StandardScanDetails(props) {
  return (
    <div className="standard">
      <h2>Standard Byte Scan 1.0 </h2>
      <ul>
        <li>Scan your computer and server </li>
        <li>Scan malicious and vulnerabilities </li>
        <li>Export reports in PDF and CSV files formats</li>
        <button onClick={() => props.passedFunction(props.product[0]['_id'])}>Add to Cart</button>
      </ul>
    </div>
  );
}

