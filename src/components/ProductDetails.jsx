import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/68056f0d-605b-4a31-af9f-be62e32b414e'
        );
        
        const data = await response.json();
        const foundProduct = data.find((p) => p.id === parseInt(id));
        
        setProduct(foundProduct || null);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const renderLoading = () => (
    <div className="flex justify-center items-center h-64">
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  );

  const renderError = () => (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-500 text-lg">{error}</p>
    </div>
  );

  const renderNotFound = () => (
    <div className="flex justify-center items-center h-64">
      <p className="text-gray-600 text-lg">Product not found</p>
    </div>
  );

  const renderProduct = () => (
    <>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">
          {product.name}
        </h1>
        
        <p className="text-xl font-semibold text-gray-700">
          ${product.price.toFixed(2)}
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>
        
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md 
                     hover:bg-blue-600 transition-colors duration-200"
        >
          ← Back to Products
        </Link>
      </div>
    </>
  );

  if (loading) return renderLoading();
  if (error) return renderError();
  if (!product) return renderNotFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      {renderProduct()}
    </div>
  );
};

export default ProductDetails;