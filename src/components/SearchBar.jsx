import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-white px-4 py-2 rounded-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="bg-white text-gray-900 placeholder-gray-500 focus:outline-none flex-1"
      />
      <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;