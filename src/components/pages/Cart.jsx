import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../styles/cart.css";

export default function Cart(props) {
    const [cart, setCart] = useState([]);
    const [payload, setPayload] = useState({});
    const [haserror, setError] = useState(false);
    const fetchData = async () => {
        const res = await fetch("http://localhost:9000/cart");
        res.json().then((res) => {
            console.log(res.data);
            setCart(res.data.items);
            setPayload(res.data);
        }).catch((error) => {
            setError(error);
        });
    }
    const emptyCart = async () => {
        try {
            const res = await fetch("http://localhost:9000/cart/empty-cart", {
                method: "DELETE",
            });
            await res.json();
            fetchData();
            props.history.push("/");
        } catch (err) {
            console.log(err);
        }
    }
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
            props.history.push("/Cart")
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, i) => (
                        <tr key={item.productId._id}>
                            <td>{item.productId.name}</td>
                            <td>{item.productId.price}</td>
                            <td>
                                <button onClick={(e) => deleteItemFromCart(item.productId._id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total: {payload.subTotal}</td>
                        <td>
                            <button onClick={(e) => emptyCart()}>Empty Cart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}