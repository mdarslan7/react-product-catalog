import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 hover:line-clamp-none transition-all duration-300">
            {product.name}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 text-center"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;