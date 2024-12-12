import React from 'react';

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

interface MedicationCardProps {
  medicamento: Medicamento;
  onViewDetails: (id: number) => void;
}

const MedicationCard: React.FC<MedicationCardProps> = ({ medicamento, onViewDetails }) => {
  if (!medicamento) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">{medicamento.nombre}</h2>
      <p className="text-p-olivine-700">Marca: {medicamento.marca}</p>
      <p className="text-p-olivine-700">Categoría: {medicamento.categoria}</p>
      <p className="text-p-olivine-700">Concentración: {medicamento.concentracion} mg</p>
      <p className="text-p-olivine-700">Precio unitario: ${medicamento.precio_unitario}</p>
      <p className="text-p-olivine-700">Existencias: {medicamento.existencias}</p>
      <p className="text-p-olivine-700">Requiere fórmula: {medicamento.formula ? 'Sí' : 'No'}</p>
      <p className="text-p-olivine-700">Periodicidad: {medicamento.periodicidad} horas</p>
      <p className="text-p-olivine-700">Cantidad: {medicamento.cantidad}</p>
      <div className="mt-2">
        <p className="font-semibold text-p-olivine-950">Disponible en:</p>
        <p className="text-p-olivine-700">{medicamento.nombreFarmacia}</p>
        <p className="text-p-olivine-700">{medicamento.direccion}</p>
      </div>
      <button
        onClick={() => onViewDetails(medicamento.id)}
        className="mt-4 bg-p-olivine-600 text-white px-4 py-2 rounded-md hover:bg-p-olivine-700 transition-colors duration-200"
      >
        Ver detalles
      </button>
    </div>
  );
};

export default MedicationCard;
