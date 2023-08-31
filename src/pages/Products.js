import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <h1>Products Page</h1>
            <p>Go to <Link to='/'>Home Page</Link></p>
        </>
    )
}

export default Products