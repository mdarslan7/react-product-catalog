import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;
