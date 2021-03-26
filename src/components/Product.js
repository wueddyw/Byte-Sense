import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    async function fetchData() {
        const res = await fetch("")
    }
}