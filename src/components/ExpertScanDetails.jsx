import React, { useState, useEffect } from "react";

export default function ExpertScanDetails() {
  const [products, setProducts] = useState([]);
  const [haserror, setError] = useState(false);
  const fetchData = async () => {
    const res = await fetch("http://localhost:9000/products/605d1d05c8e216438c1336e8");
    res.json().then((res) => {
      console.log(res.data);
      setProducts(res.data);
    }).catch((error) => {
      setError(error);
    });
  }
  const addToCart = async (id) => {
    try {
      const response = await fetch("http://localhost:9000/cart", {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="expert">
      <h2>Expert Level Byte Scan 1.0 </h2>
      <ul className="productlist">
        <li>Scan your computer and server </li>
        <li>Scan malicious and vulnerabilities </li>
        <li>Export reports in PDF and CSV files formats</li>
        <li>Capture vulnerability IP addresses and location</li>
        <li>Monitor live system traffic activities and remote any malicious virus</li>
        <button onClick={() => addToCart(products['_id'])}>Add to Cart</button>
      </ul>
    </div>
  );
}