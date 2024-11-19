import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;