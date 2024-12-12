"use client";
import { useState } from "react";
import Header from "@/app/sections/header";

export default function TurnDispenser() {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextTurn = () => {
    setCurrentTurn((prevTurn) => prevTurn + 1);
    setIsModalOpen(true);
  };

  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-p-olivine-50 to-p-olivine-200 px-6">
        <div className="bg-p-olivine-100 w-[60%] rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center mx-auto">
          <h1 className="text-2xl font-extrabold mb-8 text-p-olivine-950 text-center leading-tight">
            Bienvenido al Sistema de{" "}
            <span className="text-p-olivine-700">dispensación de turnos</span>
          </h1>
          <h2 className="text-lg font-semibold mb-8 text-p-olivine-950 text-center">
            Obten tu turno, serás atendido en breve
          </h2>
          <button
            onClick={handleNextTurn}
            className="w-[60%] px-4 py-2 bg-gradient-to-r from-p-olivine-500 to-p-olivine-600 text-white font-medium text-lg rounded-full shadow-2xl transform transition hover:from-p-olivine-600 hover:to-p-olivine-700 hover:scale-110 focus:ring-4 hover:animate-bounce focus:ring-p-olivine-400"
          >
            Generar Turno
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl p-8 w-96 shadow-2xl relative animate-fade-in">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-p-olivine-950 text-center">
                ¡Este es tu turno!
              </h2>
              <p className="text-6xl font-extrabold text-p-olivine-600 mb-4 text-center">
                C{currentTurn}
              </p>
              <p className="text-sm text-p-olivine-800 text-center mb-4">
                Por favor, espera tu llamado. Nuestro equipo estará contigo en
                breve.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 px-6 py-3 bg-p-olivine-600 text-white font-medium rounded-lg shadow-md hover:bg-p-olivine-400 hover:scale-105 transition-transform focus:ring-4 focus:ring-p-olivine-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
