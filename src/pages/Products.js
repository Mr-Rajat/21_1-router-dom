import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
            <p>Go to <Link to='/'>Home Page</Link></p>
        </>
    )
}

export default Products