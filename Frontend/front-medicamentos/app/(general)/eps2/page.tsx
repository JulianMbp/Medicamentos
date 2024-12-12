"use client";

import React, { useState } from "react";
import axios from 'axios';
import Header from "@/app/sections/header";
import SearchBar from "@/app/components/searchBar";
import MedicationCard from "@/app/components/MedicationCard";

interface Farmacia {
  id: number;
  nombreSede: string;
}

interface Medicamento {
  id: number;
  nombre: string;
  existencias: number;
  concentracion: number;
  farmacias: Farmacia[];
  marca: string;
  categoria: string;
  formula: boolean;
  periodicidad: number;
  cantidad: number;
  precio_unitario: number;
}

export default function Eps2() {
  const [searchResults, setSearchResults] = useState<Medicamento[]>([]);
  const [selectedMedicamento, setSelectedMedicamento] = useState<Medicamento | null>(null);

  const handleSearch = (results: Medicamento[]) => {
    setSearchResults(results);
    setSelectedMedicamento(null);
  };

  const handleViewDetails = async (id: number) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/medicamentos/${id}`);
    setSelectedMedicamento(response.data);
  } catch (error) {
    console.error("Error fetching medication details:", error);
  }
};

  return (
    <main className="w-screen min-h-screen bg-p-olivine-50 flex flex-col">
      <Header />

      <div className="flex flex-col items-center justify-start p-6 bg-p-olivine-100 flex-grow space-y-6 m-5">
        <div className="shadow-2xl bg-p-olivine-50 rounded-xl p-12 border border-p-olivine-950 border-opacity-20 w-full max-w-4xl">
          <p className="font-semibold pb-2 pt-6 w-full text-center text-p-olivine-950">
            Bienvenido usuario de <span className="text-p-olivine-700 font-bold">Sanitas</span>
          </p>

          <SearchBar onSearch={handleSearch} />
          <p className="text-p-olivine-700 pt-7 font-light text-center">
            Busca los medicamentos que necesites
          </p>
        </div>

        {selectedMedicamento ? (
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-p-olivine-950 mb-4">Detalles del medicamento:</h2>
            <MedicationCard medicamento={selectedMedicamento} onViewDetails={handleViewDetails} />
            <button
              onClick={() => setSelectedMedicamento(null)}
              className="mt-4 bg-p-olivine-600 text-white px-4 py-2 rounded-md hover:bg-p-olivine-700 transition-colors duration-200"
            >
              Volver a resultados
            </button>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-p-olivine-950 mb-4">Resultados de la búsqueda:</h2>
            {searchResults.map((medicamento) => (
              <MedicationCard key={medicamento.id} medicamento={medicamento} onViewDetails={handleViewDetails} />
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}

