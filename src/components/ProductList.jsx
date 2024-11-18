import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products.json'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;