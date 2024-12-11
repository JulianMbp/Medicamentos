"use client";

import React from "react";
import SearchBar from "../general/searchBar"; 
import Link from "next/link";

const Welcome: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Buscando:", query);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-p-olivine-950">Bienvenido a MedFinder</h1>
      <h3 className="text-xl text-p-olivine-950">Encuentra los medicamentos que necesitas</h3>
      <SearchBar onSearch={handleSearch} />
      <p className="mt-4 text-p-olivine-950">
        O haz click para 
        <Link href="/med" className="text-p-harvest-gold-700 hover:underline font-bold pl-2">
      ver medicamentos disponibles
    </Link>
      </p>
    </div>
  );
};
export default Welcome;
