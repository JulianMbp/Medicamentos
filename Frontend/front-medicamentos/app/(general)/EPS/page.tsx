"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "@/app/sections/welcome";

export default function EPS() {
  const router = useRouter();
  const [selectedEPS, setSelectedEPS] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedEPS(selectedValue);
    setTimeout(() => {
      router.push(`/${selectedValue}`);
    }, 500);
  };

  return (
    <main
      className="min-h-screen pb-4 bg-gradient-to-br from-green-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center px-4 relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <Welcome />
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-4 text-center">
              Selecciona tu EPS
            </h2>
            <form>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="eps">
                Escoge tu EPS:
              </label>
              <div className="relative">
                <select
                  id="eps"
                  name="eps"
                  defaultValue="option"
                  onChange={handleSelectChange}
                  className="block w-full pl-3 pr-10 py-2 text-neutral-800 text-base border-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                >
                  <option value="option" disabled>
                    Selecciona una opción
                  </option>
                  <option value="eps1">Nueva EPS</option>
                  <option value="eps2">Sanitas</option>
                  <option value="eps3">Emssanar</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-600 dark:text-zinc-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedEPS && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green-100 dark:bg-green-800 p-4"
            >
              <p className="text-green-800 dark:text-green-200 text-center">
                Redirigiendo a {selectedEPS}...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <DecorativeElements mousePosition={mousePosition} />
    </main>
  );
}

const DecorativeElements = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const { x, y } = mousePosition;

  return (
    <>
      <motion.div
        className="absolute  top-0 left-0 w-20 h-20 rounded-full bg-green-300 dark:bg-green-300 opacity-50"
        style={{ transform: `translate(${x * 0.06}px, ${y * 0.10}px)` }}
      />
      <motion.div
        className="absolute  bottom-1/3 left-0 w-20 h-20 rounded-full bg-yellow-300 dark:bg-green-300 opacity-50"
        style={{ transform: `translate(${x * 0.03}px, ${y * 0.10}px)` }}
      />
      <motion.div
        className="absolute  bottom-0 right-0 w-16 h-16 rounded-full bg-blue-200 dark:bg-green-100 opacity-50"
        style={{ transform: `translate(${-x * 0.04}px, ${-y * 0.09}px)` }}
      />
       <motion.div
        className="absolute hidden sm:block bottom bottom-1/4 left-3/4 w-16 h-16 rounded-full bg-green-400 dark:bg-blue-100 opacity-50"
        style={{ transform: `translate(${-x * 0.03}px, ${-y * 0.10}px)` }}
      />
      <motion.div
        className="absolute hidden sm:block bottom top-1/2 left-1/4 w-24 h-24 rounded-full bg-green-400 dark:bg-yellow-100 opacity-50"
        style={{ transform: `translate(${x * 0.05}px, ${-y * 0.09}px)` }}
      />
     
      <motion.div
        className="absolute top-1/4 left-3/4 w-24 h-24 rounded-full bg-green-300 dark:bg-green-300 opacity-50"
        style={{ transform: `translate(${x * 0.02}px, ${-y * 0.10}px)` }}
      />
    </>
  );
};
