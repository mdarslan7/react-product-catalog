import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext'; // Import the useCart hook
import productsData from '../data/products.json'; // Product data
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { getTotalItems } = useCart(); 

  const categories = [...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="w-1/2">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="relative">
          <button className="bg-blue-500 text-white p-2 rounded-full text-lg">
            🛒
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
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
  );
};

export default Home;