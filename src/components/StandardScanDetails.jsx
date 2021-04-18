import React, { useState, useEffect } from "react";
import { getFromStorage, setInStorage } from "../utils/storage";

export default function StandardScanDetails() {
  const [products, setProducts] = useState([]);
  const [haserror, setError] = useState(false);
  const fetchData = async () => {
    const res = await fetch("http://localhost:9000/products/607923b4b0cf1db650f24886");
    res.json().then((res) => {
      console.log(res.data);
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
    <div className="standard">
      <h2>Standard Byte Scan 1.0 </h2>
      <ul className="productlist">
        <li>Scan your computer and server </li>
        <li>Scan malicious and vulnerabilities </li>
        <li>Export reports in PDF and CSV files formats</li>
        <button onClick={() => addToCart(products)}>Add to Cart</button>
      </ul>
    </div>
  );
}

