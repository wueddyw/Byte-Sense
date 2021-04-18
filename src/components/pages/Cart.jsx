import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cart.css";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import CartItem from "../CartItem.jsx";
import PaypalButton from "../PayPalButton.jsx";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.00);

  const fetchData = () => {
    if (localStorage.getItem('cart') !== null) {
      let temp = JSON.parse(localStorage.getItem('cart'));
      setCart(temp);
      let num = 0;
      temp.forEach(function (item, index) {
        num += parseFloat(item.price);
      });
      console.log(num);
      setTotal(num);
    } 
  }

  const deleteItemFromCart = (id) => {
    let stored = JSON.parse(localStorage.getItem('cart'));
    let newCart = stored.filter(product => product._id !== id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    let num = 0;
    newCart.forEach(function (item, index) {
      num += parseFloat(item.price);
    });
    console.log(num);
    setTotal(num);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Navbar />
      <div>
        <div className="cart">
          <h1>Shopping Cart</h1>
          {cart.length > 0 ? (
            <div>
              <div className="cart-separator">
                <div id="item-container">
                  {cart.map((item, i) => (
                    <CartItem
                      name={item.name}
                      price={item.price}
                      remove={deleteItemFromCart}
                      id={item._id}
                      key={item._id}
                    />
                  ))}
                </div>
                <div className="total">
                  <h2>Summary</h2>
                  <h3>Total: ${total}</h3>
                  <PaypalButton
                    amount={total}
                    afterPurchaseGoTo="/Confirm"
                  />
                </div>
              </div>
            </div>
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
