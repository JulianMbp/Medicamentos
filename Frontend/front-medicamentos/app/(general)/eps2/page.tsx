"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react';
import Header from "@/app/sections/header";
import Footer from "@/app/sections/footer";

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardHover = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 128, 128, 0.2)",
  },
};

export default function Med() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<keyof Medicamento | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    if (sortBy) {
      const sortedResults = [...searchResults].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
      setSearchResults(sortedResults);
    }
  }, [sortBy, sortOrder]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/medicamentos/nombre/${encodeURIComponent(
          searchTerm
        )}/`
      );
      const medicamentos = response.data.medicamentos;

      if (medicamentos.length > 0) {
        setSearchResults(medicamentos);
      } else {
        setSearchResults([]);
        setError("No se encontraron medicamentos con ese nombre.");
      }
    } catch (err) {
      setError("Hubo un error al cargar los datos.");
      console.error(err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key: keyof Medicamento) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (key: keyof Medicamento) => {
    if (sortBy !== key) return null;
    return sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <main className="dark:bg-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-6 bg-gradient-to-br from-green-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800">
        <motion.h1
          className="text-5xl font-bold text-center text-green-700 dark:text-green-200 mt-10 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          Búsqueda de Medicamentos
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Ingrese el nombre del medicamento..."
              className="w-full px-6 py-4 text-lg border-2 border-green-500 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 transition-colors duration-300 flex items-center"
            >
              <Search size={20} className="mr-2" />
              Buscar
            </motion.button>
          </div>
        </motion.div>

        {loading && (
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </motion.div>
        )}
        
        {error && (
          <motion.p
            className="text-center text-red-500 text-lg mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {error}
          </motion.p>
        )}

        {searchResults.length > 0 && (
          <motion.div
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300">
                Resultados ({searchResults.length})
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-zinc-700 dark:text-zinc-300">Ordenar por:</span>
                <button
                  onClick={() => handleSort("nombre")}
                  className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                >
                  Nombre {renderSortIcon("nombre")}
                </button>
                <button
                  onClick={() => handleSort("precio_unitario")}
                  className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                >
                  Precio {renderSortIcon("precio_unitario")}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ staggerChildren: 0.1 }}
          >
            {searchResults.map((medicamento) => (
              <motion.div
                key={medicamento.id}
                className="bg-white dark:bg-zinc-700 p-6 rounded-xl shadow-lg transform transition-all"
                variants={cardHover}
                whileHover="hover"
                layoutId={`card-${medicamento.id}`}
              >
                <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {medicamento.nombre}
                </h2>
                <div className="space-y-2 mb-4">
                  <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Marca:</span> {medicamento.marca}</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Categoría:</span> {medicamento.categoria}</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Concentración:</span> {medicamento.concentracion} mg</p>
                  <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Existencias:</span> {medicamento.existencias}</p>
                </div>
                {expandedCard === medicamento.id ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Farmacia:</span> {medicamento.nombreFarmacia}</p>
                    <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Dirección:</span> {medicamento.direccion}</p>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold">Requiere Fórmula:</span> {medicamento.formula ? "Sí" : "No"}
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      <span className="font-semibold">Periodicidad:</span> Cada {medicamento.periodicidad} horas
                    </p>
                  </motion.div>
                ) : null}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${medicamento.precio_unitario.toFixed(2)}
                  </p>
                  <motion.button
                    onClick={() => setExpandedCard(expandedCard === medicamento.id ? null : medicamento.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-300"
                  >
                    {expandedCard === medicamento.id ? (
                      <>
                        <X size={16} className="inline mr-1" />
                        Menos info
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} className="inline mr-1" />
                        Más info
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {searchResults.length === 0 && !loading && !error && (
          <motion.p
            className="text-center text-zinc-700 dark:text-zinc-300 text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            No hay resultados para mostrar. Intente con otro término de búsqueda.
          </motion.p>
        )}
      </div>
      <Footer />
    </main>
  );
}

