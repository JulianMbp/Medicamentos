import Header from "@/app/sections/header";
export default function Med() {
    return (
        <main>
        <Header />
        <div className="p-6 bg-p-olivine-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-p-olivine-950 mt-6 mb-10">Medicamentos Disponibles</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-p-olivine-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:shadow-2xl hover:shadow-p-harvest-gold-700 hover:bg-p-harvest-gold-100 hover:-translate-y-3">
            <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">Aspirina</h2>
            <p className="text-p-olivine-700">Marca: Bayer</p>
            <p className="text-p-olivine-700">Cantidad disponible: 50 unidades</p>
            <p className="text-lg font-bold text-p-olivine-500 hover:text-p-harvest-gold-600 mt-4">$10.99</p>
          </div>
          <div className="bg-p-olivine-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:shadow-2xl hover:shadow-p-harvest-gold-700 hover:bg-p-harvest-gold-100 hover:-translate-y-3">
            <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">Aspirina</h2>
            <p className="text-p-olivine-700">Marca: Bayer</p>
            <p className="text-p-olivine-700">Cantidad disponible: 50 unidades</p>
            <p className="text-lg font-bold text-p-olivine-500 hover:text-p-harvest-gold-600 mt-4">$10.99</p>
          </div>
          <div className="bg-p-olivine-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:shadow-2xl hover:shadow-p-harvest-gold-700 hover:bg-p-harvest-gold-100 hover:-translate-y-3">
            <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">Aspirina</h2>
            <p className="text-p-olivine-700">Marca: Bayer</p>
            <p className="text-p-olivine-700">Cantidad disponible: 50 unidades</p>
            <p className="text-lg font-bold text-p-olivine-500 hover:text-p-harvest-gold-600 mt-4">$10.99</p>
          </div>
          <div className="bg-p-olivine-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:shadow-2xl hover:shadow-p-harvest-gold-700 hover:bg-p-harvest-gold-100 hover:-translate-y-3">
            <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">Aspirina</h2>
            <p className="text-p-olivine-700">Marca: Bayer</p>
            <p className="text-p-olivine-700">Cantidad disponible: 50 unidades</p>
            <p className="text-lg font-bold text-p-olivine-500 hover:text-p-harvest-gold-600 mt-4">$10.99</p>
          </div>
          <div className="bg-p-olivine-50 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-4 hover:shadow-2xl hover:shadow-p-harvest-gold-700 hover:bg-p-harvest-gold-100 hover:-translate-y-3">
            <h2 className="text-xl font-semibold text-p-olivine-950 mb-2">Aspirina</h2>
            <p className="text-p-olivine-700">Marca: Bayer</p>
            <p className="text-p-olivine-700">Cantidad disponible: 50 unidades</p>
            <p className="text-lg font-bold text-p-olivine-500 hover:text-p-harvest-gold-600 mt-4">$10.99</p>
          </div>

        </div>
      </div>
      </main>
    );
}
