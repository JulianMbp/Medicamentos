"use client";
import React, { useState } from "react";


interface SearchBarProps {
  onSearch?: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="flex items-center bg-white border border-p-olivine-950 rounded-lg mt-5 px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-p-harvest-gold-500">
  <input
    type="text"
    className="flex-1 bg-transparent outline-none text-p-olivine-950 placeholder-gray-400 focus:ring-0 focus:outline-none transition duration-200"
    placeholder="Search..."
    value={query}
    onChange={handleInputChange}
  />
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-500 transition duration-200 ease-in-out transform group-hover:scale-110">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</div>


  );
};

export default SearchBar;
