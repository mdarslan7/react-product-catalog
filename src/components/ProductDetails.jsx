import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetails;
