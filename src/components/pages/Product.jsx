import React, { useState, useEffect } from 'react';
import StandardScanDetails from '../StandardScanDetails';
import ExpertScanDetails from '../ExpertScanDetails';
import '../../styles/product.css';
import ProductTopBanner from "../ProductTopBanner"
import Footer from "../Footer";



export default function Product() {
  const [products, setProducts] = useState([]);
  const [haserror, setError] = useState(false);
  const fetchData = async () => {
    const res = await fetch("http://localhost:9000/products");
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
    <div className='productContainer'>
      <ProductTopBanner></ProductTopBanner>
      <h1>Byte Scan</h1>
      <div className='productbox' data-aos="fade-left">
        <div className='aboutProduct'>
          <StandardScanDetails passedFunction={addToCart} product={products} />
          <ExpertScanDetails passedFunction={addToCart} product={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
