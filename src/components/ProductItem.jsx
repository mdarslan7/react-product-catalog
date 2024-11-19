import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 
const ProductItem = ({ product }) => {
  const { addToCart } = useCart(); 
  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className="inline-block bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;