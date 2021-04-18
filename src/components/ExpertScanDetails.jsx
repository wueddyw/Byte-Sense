import React, { useState, useEffect } from "react";

export default function ExpertScanDetails() {
  const [products, setProducts] = useState([]);
  const [haserror, setError] = useState(false);
  const fetchData = async () => {
    const res = await fetch("http://localhost:9000/products/60792408b0cf1db650f24887");
    res.json().then((res) => {
      setProducts(res.data);
    }).catch((error) => {
      setError(error);
    });
  }
  const addToCart = (product) => {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    const exists = cart.some(prod => prod._id === product._id)
    if (!exists) {
      console.log(product);
      console.log(cart);
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    alert("Item Added To Cart");
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
        <button onClick={() => addToCart(products)}>Add to Cart</button>
      </ul>
    </div>
  );
}