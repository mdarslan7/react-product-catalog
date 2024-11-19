import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import productsData from "../data/products.json";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { getTotalItems } = useCart();

  const categories = [...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/2">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="relative">
            <Link
              to="/cart"
              className="bg-blue-500 text-white p-2 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              title="Go to Cart"
            >
              🛒
            </Link>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 animate-bounce">
              {getTotalItems()}
            </span>
          </div>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onChange={handleCategoryChange}
        />
        <ProductList products={filteredProducts} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        React Product Catalog
      </footer>
    </div>
  );
};

export default Home;