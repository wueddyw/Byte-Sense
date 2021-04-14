import React from 'react';
import Product from '../images/Product.png';

export default function CartItem(props) {
    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={Product} />
            </div>
            <div className="item-desc">
                <h3>{props.name}</h3>
                <p className="item-price">Price: ${props.price}</p>
            </div>
            <div className="item-total">
                <button onClick={() => props.remove(props.id)}>Remove</button>
            </div>
        </div>
    );
}