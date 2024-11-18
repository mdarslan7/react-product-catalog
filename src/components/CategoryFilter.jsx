import React from 'react';

const CategoryFilter = ({ categories, selectedCategories, onChange }) => {
  return (
    <div className="mb-4">
      {categories.map(category => (
        <label key={category} className="mr-4">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onChange(category)}
            className="mr-2"
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;