import React from 'react';
import { useParams } from 'react-router-dom';

 const ProductDetailPage = () => {
    const params = useParams();

  return (
    <h1>Product Detail</h1>
  )
}

export default ProductDetailPage;

