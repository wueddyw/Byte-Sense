import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cart.css";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import CartItem from "../CartItem.jsx";
import PaypalButton from "../PayPalButton.jsx";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  const [payload, setPayload] = useState({});
  const [haserror, setError] = useState(false);
  const fetchData = async () => {
    const res = await fetch("http://localhost:9000/cart");
    res
      .json()
      .then((res) => {
        setCart(res.data.items);
        setPayload(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const deleteItemFromCart = async (id) => {
    try {
      const res = await fetch("http://localhost:9000/cart/remove-item", {
        method: "DELETE",
        body: JSON.stringify({
          productId: id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      await res.json();
      fetchData();
      props.history.push("/Cart");
    } catch (err) {
      console.log(err);
    }
  };

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
                      name={item.productId.name}
                      price={item.productId.price}
                      remove={deleteItemFromCart}
                      id={item.productId._id}
                      key={item.productId._id}
                    />
                  ))}
                </div>
                <div className="total">
                  <h2>Summary</h2>
                  <h3>Total: ${payload.subTotal}.00</h3>
                  <PaypalButton
                    amount={payload.subTotal}
                    afterPurchaseGoTo="Home"
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
