import Header from "@/app/sections/header";

export default function IA() {
  return (
    <main className="w-full h-full bg-p-olivine-50  font-sans">
      <Header />
      
      <div className="w-full h-screen bg-p-olivine-100 flex flex-col justify-end  ">
    
        <div className="bg-p-olivine-50 max-w-md mx-auto p-4 my-auto rounded-lg shadow-lg w-[70%] h-auto">
          
          <div className="flex flex-col space-y-4 h-96 overflow-y-auto p-2">
            <div className="flex items-start space-x-4">
              <div className="bg-p-olivine-700 text-white rounded-lg p-2 max-w-xs">
                <p>Hola, ¿en qué puedo ayudarte?</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-p-olivine-200 text-gray-800 rounded-lg p-2 max-w-xs ml-auto">
                <p>Me gustaría encontrar mis medicamentos</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded-lg text-p-olivine-950 focus:outline-none focus:ring-2 focus:ring-p-olivine-700"
            />
            <button className="bg-p-olivine-700 text-white p-2 rounded-lg hover:bg-p-harvest-gold-700 focus:outline-none">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
