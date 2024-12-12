'use client';
import { useState } from 'react';
import axios from 'axios';
import Header from "@/app/sections/header";

interface Medicamento {
  id: number;
  nombre: string;
  existencias: number;
  concentracion: number;
  nombreFarmacia: string;
  direccion: string;
  marca: string;
  categoria: string;
  formula: boolean;
  periodicidad: number;
  cantidad: number;
  precio_unitario: number;
}

export default function Med() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/medicamentos/nombre/${encodeURIComponent(searchTerm)}/`
      );
      const medicamentos = response.data.medicamentos;

      if (medicamentos.length > 0) {
        setSearchResults(medicamentos);
      } else {
        setSearchResults([]);
        setError('No se encontraron medicamentos con ese nombre.');
      }
    } catch (err) {
      setError('Hubo un error al cargar los datos.');
      console.error(err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dark:bg-gray-900 dark:text-gray-100">
  <Header />
  <div className="p-6 bg-p-olivine-100 dark:bg-gray-800 min-h-screen">
    <h1 className="text-3xl font-bold text-center text-p-olivine-950 dark:text-gray-100 mt-6 mb-10">
      Medicamentos Disponibles
    </h1>
    <div className="max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Ingrese el nombre del medicamento..."
          className="w-full px-4 py-3 border border-p-olivine-500 dark:border-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-p-olivine-700 dark:focus:ring-gray-600 bg-p-olivine-50 dark:bg-gray-700 text-p-olivine-900 dark:text-gray-200 placeholder-p-olivine-500 dark:placeholder-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-p-olivine-700 dark:bg-gray-600 text-white rounded-md hover:bg-p-olivine-800 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-p-olivine-900 dark:focus:ring-gray-500"
        >
          Buscar
        </button>
      </div>
    </div>

    {loading && <p className="text-p-olivine-700 dark:text-gray-300 text-center">Cargando resultados...</p>}
    {error && <p className="text-red-500 text-center">{error}</p>}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {searchResults.map((medicamento) => (
        <div
          key={medicamento.id}
          className="bg-p-olivine-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:border-p-olivine-800 dark:hover:border-gray-500 hover:shadow-2xl hover:shadow-p-olivine-700 dark:hover:shadow-gray-600 hover:bg-p-olivine-200 dark:hover:bg-gray-600 hover:-translate-y-3"
        >
          <h2 className="text-xl font-semibold text-p-olivine-950 dark:text-gray-100 mb-2">
            {medicamento.nombre}
          </h2>
          <p className="text-p-olivine-700 dark:text-gray-300">Marca: {medicamento.marca}</p>
          <p className="text-p-olivine-700 dark:text-gray-300">Categoría: {medicamento.categoria}</p>
          <p className="text-p-olivine-700 dark:text-gray-300">Concentración: {medicamento.concentracion} mg</p>
          <p className="text-p-olivine-700 dark:text-gray-300">Existencias: {medicamento.existencias}</p>
          <p className="text-p-olivine-700 dark:text-gray-300">Farmacia: {medicamento.nombreFarmacia}</p>
          <p className="text-p-olivine-700 dark:text-gray-300">Dirección: {medicamento.direccion}</p>
          <p className="text-p-olivine-700 dark:text-gray-300">
            Requiere Fórmula: {medicamento.formula ? 'Sí' : 'No'}
          </p>
          <p className="text-p-olivine-700 dark:text-gray-300">
            Periodicidad: Cada {medicamento.periodicidad} horas
          </p>
          <p className="text-lg font-bold text-p-olivine-500 dark:text-p-harvest-gold-500 hover:text-p-harvest-gold-600 dark:hover:text-p-harvest-gold-400 mt-4">
            ${medicamento.precio_unitario}
          </p>
        </div>
      ))}
    </div>

    {searchResults.length === 0 && !loading && !error && (
      <p className="text-p-olivine-700 dark:text-gray-300 text-center">No hay resultados para mostrar.</p>
    )}
  </div>
</main>

  );
}
