import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, getTotalPrice } = useCart();

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      updateCartItemQuantity(product.id, -1);
    }
  };

  const updateCartItemQuantity = (productId, delta) => {
    addToCart({ id: productId, quantity: delta });
  };

  const renderEmptyCart = () => (
    <p className="text-gray-500">
      Your cart is empty.
    </p>
  );

  const renderCartItem = (item) => (
    <li
      key={item.id}
      className="flex justify-between items-center border p-4 rounded-lg shadow"
    >
      <div>
        <h2 className="text-lg font-semibold">
          {item.name}
        </h2>
        <p className="text-gray-500">
          ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decreaseQuantity(item)}
            className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="mx-4">
            {item.quantity}
          </span>
          <button
            onClick={() => addToCart({ ...item })}
            className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-right font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </li>
  );

  const renderCart = () => (
    <div>
      <ul className="space-y-4">
        {cartItems.map(renderCartItem)}
      </ul>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-8 py-4">
      <h1 className="text-2xl font-semibold mb-4">
        Your Cart
      </h1>
      
      {cartItems.length === 0 ? renderEmptyCart() : renderCart()}
      
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CartPage;