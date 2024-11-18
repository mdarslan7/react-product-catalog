import React, { useState } from 'react';
import productsData from '../data/products.json';  // Assuming productsData is your original unmodified data
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order

  const categories = [...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const handleCategoryChange = category => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);  // Update the sort order when the user selects a sort option
  };

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onChange={handleCategoryChange}
      />
      <div className="mb-4 flex items-center justify-start space-x-4">
        <label htmlFor="sort" className="mr-2">Sort by Price:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={handleSortChange}
          className="border rounded px-2 py-1"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default Home;