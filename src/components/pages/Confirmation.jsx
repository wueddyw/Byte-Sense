import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import '../../styles/confirm.css';

export default function ConfirmPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    
    const setFields = () => {
        if (sessionStorage.getItem('buyerName') !== null) {
            setName(sessionStorage.getItem('buyerName'));
        }
        if (sessionStorage.getItem('buyerEmail') !== null) {
            setEmail(sessionStorage.getItem('buyerEmail'));
        }
        if (sessionStorage.getItem('orderID') !== null) {
            setOrderId(sessionStorage.getItem('orderID'));
        }
    }
    useEffect(() => {
        setFields();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="confirmBody">
                <h2>Thank you, {name}, for your purchase</h2>
                <p>A confirmation email has been sent to: {email}</p>
                <p>Order ID: {orderId}</p>
                <div className="return">
                    <a href="/">Continue shopping</a>
                </div>
            </div>
        </>
    );
}