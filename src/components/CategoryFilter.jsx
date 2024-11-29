import React from 'react';

const CategoryFilter = ({ categories, selectedCategories, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            selectedCategories.includes(category)
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;