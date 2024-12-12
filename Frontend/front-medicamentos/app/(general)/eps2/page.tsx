'use client';
import { useState } from 'react';
import axios from 'axios';

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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Medicamento | null>(null);
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
      console.log('API Response:', response.data); // Debugging: Verifica la estructura
      const medicamentos = response.data.medicamentos;

      if (medicamentos.length > 0) {
        setSearchResult(medicamentos[0]); // Toma el primer elemento del array
      } else {
        setSearchResult(null);
        setError('No se encontraron medicamentos con ese nombre.');
      }
    } catch (err) {
      setError('Hubo un error al cargar los datos.');
      console.error(err);
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Buscar Medicamento</h1>

        <div className="flex space-x-2 mb-6">
          <input
            type="text"
            placeholder="Ingrese el nombre del medicamento..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Buscar
          </button>
        </div>

        {loading && <p className="text-blue-500">Cargando resultado...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {searchResult ? (
          <div className="border p-4 rounded-md shadow-sm bg-gray-50 hover:shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">{searchResult.nombre}</h2>
            <p className="text-gray-600">Marca: {searchResult.marca}</p>
            <p className="text-gray-600">Categoría: {searchResult.categoria}</p>
            <p className="text-gray-600">Concentración: {searchResult.concentracion} mg</p>
            <p className="text-gray-600">Existencias: {searchResult.existencias}</p>
            <p className="text-gray-600">Precio Unitario: ${searchResult.precio_unitario}</p>
            <p className="text-gray-600">Farmacia: {searchResult.nombreFarmacia}</p>
            <p className="text-gray-600">Dirección: {searchResult.direccion}</p>
            <p className="text-gray-600">
              Requiere Fórmula: {searchResult.formula ? 'Sí' : 'No'}
            </p>
            <p className="text-gray-600">Periodicidad: Cada {searchResult.periodicidad} horas</p>
            <p className="text-gray-600">Cantidad: {searchResult.cantidad}</p>
          </div>
        ) : (
          !loading && !error && <p className="text-gray-600">No hay resultados para mostrar.</p>
        )}
      </div>
    </div>
  );
}
