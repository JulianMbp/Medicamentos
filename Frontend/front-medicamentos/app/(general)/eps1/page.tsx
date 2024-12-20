"use client";
import Welcome from "@/app/sections/welcome";
import Header from "../../sections/header";
import SearchBar from "@/app/components/searchBar";

export default function eps1() {
  const handleSearch = (query: string) => {
    console.log("Buscando:", query);
  };
  return (
    <main className="w-screen h-full bg-p-olivine-50 dark:bg-gray-900 flex flex-col">
  <Header />

  <div className="flex flex-col items-center justify-center p-6 bg-p-olivine-100 dark:bg-gray-800 min-h-screen space-y-6 m-5">
    <dl className="shadow-2xl bg-p-olivine-50 dark:bg-slate-700 rounded-xl p-12 border border-p-olivine-950 dark:border-gray-600 border-opacity-20">
      <p className="font-semibold pb-2 pt-6 w-full text-center text-p-olivine-950 dark:text-white">
        Bienvenido usuario de <span className="text-p-olivine-700 dark:text-p-harvest-gold-300 font-bold">Nueva EPS</span>
      </p>

      <SearchBar onSearch={handleSearch} />
      <p className="text-p-olivine-700 dark:text-gray-300 pt-7 font-light">Busca los medicamentos que necesites</p>
    </dl>
  </div>
</main>

  );
}
