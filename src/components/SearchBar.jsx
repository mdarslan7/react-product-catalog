import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search products..."
      className="w-full p-2 border rounded mb-4"
    />
  );
};

export default SearchBar;
