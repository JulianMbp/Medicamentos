'use client';
import { useState } from "react";
import Header from "@/app/sections/header";

export default function IA() {
  let resultadoFinal;
  // Estado para los mensajes y el texto de entrada
  const [messages, setMessages] = useState([
    { text: "Hola, ¿en qué puedo ayudarte?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga

  // Función para realizar la llamada a la API
  async function query(data) {
    try {
      const apiResponse = await fetch(
        "https://api.stack-ai.com/inference/v0/run/8289f07c-2530-420e-8813-60340ff3b8e6/675a262f2ac5768138ae9225",
        {
          headers: {
            Authorization: 'Bearer b2ebe509-77a6-4f00-b1ad-e67f60c9b86a',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      if (!apiResponse.ok) {
        throw new Error(`Error en la solicitud: ${apiResponse.statusText}`);
      }

      resultadoFinal = await apiResponse.json(); // Aquí obtenemos los datos
      console.log("Response result:", resultadoFinal.outputs["out-0"]); // Verifica la respuesta

      // Verifica si result.data tiene los datos que queremos
      if (resultadoFinal && resultadoFinal.data) {
        return resultadoFinal.data; // Retorna los datos que necesitamos
      }

      return "No pude encontrar una respuesta"; // Fallback si no hay datos
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      return "Lo siento, ocurrió un error al procesar tu solicitud.";
    }
  }

  // Función para manejar el envío de mensajes
  const handleSendMessage = async () => {
    if (!inputText) return;

    // Agregar mensaje del usuario al estado
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user" }
    ]);

    // Limpiar el campo de entrada
    setInputText("");

    // Cambiar estado de carga
    setIsLoading(true);

    try {
      // Llamar a la API con el mensaje del usuario
      const response = await query({
        "user_id": "<USER or Conversation ID>", // Asegúrate de pasar un ID válido si es necesario
        "in-0": inputText // Usar el texto del usuario directamente
      });

      console.log(response); // Verifica la respuesta en la consola

      // Agregar la respuesta del bot al estado
      setMessages((prevMessages) => [
        ...prevMessages,
      
        { text: JSON.stringify(resultadoFinal!.outputs["out-0"]), sender: "bot" }
      ]);

    } catch (error) {
      // En caso de error, agregar un mensaje de error
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Lo siento, ocurrió un error al procesar tu solicitud.", sender: "bot" }
      ]);
    } finally {
      // Cambiar el estado de carga después de la respuesta
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full h-full bg-p-olivine-50 font-sans">
      <Header />

      <div className="w-full h-screen bg-p-olivine-100 flex flex-col justify-end">
        <div className="bg-p-olivine-50 max-w-md mx-auto p-4 my-auto rounded-lg shadow-lg w-[70%] h-auto">
          <div className="flex flex-col space-y-4 h-96 overflow-y-auto p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${message.sender === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`p-2 rounded-lg ${message.sender === "user" ? "bg-p-olivine-200 text-gray-800" : "bg-p-olivine-700 text-white"} max-w-xs`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {/* Mostrar mensaje de carga si está esperando la respuesta */}
            {isLoading && (
              <div className="flex items-center space-x-4 ml-auto">
                <div className="p-2 rounded-lg bg-gray-300 text-gray-800 max-w-xs">
                  <p>Estoy pensando...</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-p-olivine-950 focus:outline-none focus:ring-2 focus:ring-p-olivine-700"
            />
            <button
              onClick={handleSendMessage}
              className="bg-p-olivine-700 text-white p-2 rounded-lg hover:bg-p-harvest-gold-700 focus:outline-none"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
