"use client";

import { useRouter } from "next/navigation";
import Header from "@/app/sections/header";
import Welcome from "@/app/sections/welcome";

export default function EPS() {
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "eps1":
        router.push("/eps1");
        break;
      case "eps2":
        router.push("/eps2");
        break;
      case "eps3":
        router.push("/eps3");
        break;
    }
  };
  return (
    <main>
      <div className="p-6 bg-p-olivine-50 min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen bg-p-olivine-100">
        <Welcome/>
          <div className="w-full max-w-md p-6 bg-p-olivine-50 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-p-olivine-900 mb-4 text-center">
              Selecciona tu EPS
            </h2>
            <form>
              <label className="block text-sm font-medium text-p-olivine-950 mb-2">
                Escoge tu EPS:
              </label>
              <select
                id="eps"
                name="eps"
                defaultValue="option"
                onChange={handleSelectChange}
                className="w-full p-3 border border-p-olivine-200 rounded-lg shadow-sm focus:ring-p-harvest-gold-500 focus:border-p-harvest-gold-500 hover:border-p-harvest-gold-500 text-p-olivine-800"
              >
                <option value="option" disabled>
                  Selecciona una opción
                </option>
                <option value="eps1">Nueva EPS</option>
                <option value="eps2">Sanitas</option>
                <option value="eps3">Emssanar</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}