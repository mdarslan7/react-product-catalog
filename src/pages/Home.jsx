import React, { useState } from 'react';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = category => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
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