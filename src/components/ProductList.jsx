import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const ProductDetailsModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10 p-2 rounded-full transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-700">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={product.image || "placeholder.jpg"}
                alt={product.name || "Product image"}
                className="w-full h-56 object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 hover:line-clamp-none transition-all duration-300">
                {product.name || "Unnamed Product"}
              </h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  ${product.price?.toFixed(2) || "0.00"}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleViewDetails(product)}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </>
  );
};

export default ProductList;
