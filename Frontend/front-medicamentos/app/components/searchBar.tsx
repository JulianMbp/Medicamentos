"use client";

import React, { useState } from "react";
import axios from 'axios';

interface SearchBarProps {
  onSearch: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = async () => {
    try {
      let response;
      if (query) {
        response = await axios.get(`http://127.0.0.1:8000/api/medicamentos/nombre/${query}/`);
      } else {
        response = await axios.get('http://127.0.0.1:8000/api/medicamentos/');
      }
      onSearch(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
      onSearch([]);
    }
  };

  return (
    <div className="flex items-center bg-p-olivine-50 border border-p-olivine-950 rounded-full mt-5 px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-p-harvest-gold-500">
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-p-olivine-950 placeholder-gray-400 focus:ring-0 focus:outline-none transition duration-200"
        placeholder="Buscar medicamentos..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-transparent border-0 outline-none cursor-pointer transition duration-200 ease-in-out hover:scale-110 focus:ring-2 focus:ring-p-harvest-gold-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 text-gray-500 transition duration-200 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
