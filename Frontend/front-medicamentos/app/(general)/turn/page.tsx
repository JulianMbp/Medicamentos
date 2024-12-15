"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from 'canvas-confetti';
import Header from "@/app/sections/header";
import Footer from "@/app/sections/footer";

const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const floatingBubbleVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export default function TurnDispenser() {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isModalOpen]);

  const handleNextTurn = () => {
    setCurrentTurn((prevTurn) => prevTurn + 1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <motion.main 
      className="dark:bg-zinc-900 bg-blue-100 dark:text-zinc-200 min-h-screen relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23bef264" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
        backgroundSize: '400% 400%'
      }}
    >
      <Header />
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8 rounded-full  bg-green-800 dark:bg-p-harvest-gold-200 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={floatingBubbleVariants}
          animate="animate"
        />
      ))}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        <motion.div 
          className="bg-green-100 dark:bg-zinc-700 w-full max-w-2xl rounded-3xl p-12 shadow-2xl flex flex-col items-center justify-center mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-200 to-transparent dark:from-p-harvest-gold-700 dark:to-transparent opacity-20"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.h1 
            className="text-4xl font-extrabold mb-8 text-green-950 dark:text-white text-center leading-tight relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Bienvenido al Sistema de{" "}
            <span className="text-green-700 dark:text-p-harvest-gold-400">dispensación de turnos</span>
          </motion.h1>
          <motion.h2 
            className="text-xl font-semibold mb-12 text-green-950 dark:text-zinc-300 text-center relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Obtén tu turno, serás atendido en breve
          </motion.h2>
          <motion.button
            onClick={handleNextTurn}
            className="relative w-64 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 dark:from-p-harvest-gold-500 dark:to-p-harvest-gold-700 text-white font-medium text-xl rounded-full shadow-2xl transform transition-all duration-300 hover:from-blue-600 hover:to-blue-700 dark:hover:from-p-harvest-gold-600 dark:hover:to-p-harvest-gold-800 hover:scale-105 focus:ring-4 focus:ring-green-400 dark:focus:ring-p-harvest-gold-500 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Generar Turno</span>
            <motion.div
              className="absolute inset-0 bg-white dark:bg-zinc-900 opacity-20"
              initial={{ scale: 0, borderRadius: "100%" }}
              whileHover={{ scale: 1.5, borderRadius: "0%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white dark:bg-zinc-700 rounded-3xl p-12 w-96 shadow-2xl relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-white focus:outline-none"
                  aria-label="Close modal"
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
                <motion.h2 
                  className="text-3xl font-semibold mb-6 text-green-950 dark:text-white text-center"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ¡Este es tu turno!
                </motion.h2>
                <motion.p 
                  className="text-8xl font-extrabold text-green-600 dark:text-p-harvest-gold-400 mb-6 text-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 10, delay: 0.4 }}
                >
                  C{currentTurn}
                </motion.p>
                <motion.p 
                  className="text-sm text-green-800  dark:text-zinc-300 text-center mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Por favor, espera tu llamado. Nuestro equipo estará contigo en breve.
                </motion.p>
                <motion.button
                  onClick={closeModal}
                  className="w-full px-6 py-3 bg-green-600 dark:bg-p-harvest-gold-600 text-white font-medium rounded-lg shadow-md hover:bg-green-500 dark:hover:bg-p-harvest-gold-500 transition-all duration-300 focus:ring-4 focus:ring-green-300 dark:focus:ring-p-harvest-gold-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cerrar
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showThankYou && (
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 dark:bg-p-harvest-gold-600 text-white px-6 py-3 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
            >
              ¡Gracias por usar nuestro servicio!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </motion.main>
  );
}

