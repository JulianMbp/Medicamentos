'use client'

import { useState } from "react";
import axios from "axios";
import Header from "@/app/sections/header";

export default function IA() {
  const [messages, setMessages] = useState([
    { text: "Hola, ¿en qué puedo ayudarte?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Función para realizar la llamada a la API usando Axios
  
  async function query(data) {
    try {
        
      const response = await axios.post(
        
        "https://api.stack-ai.com/inference/v0/run/0690b6cb-e1e2-47ee-8726-4bf196034ae6/6759f1717c4f228b77d31358",
        data,
        {
          headers: {
            'Authorization': 'Bearer cf8c16e4-df48-474d-9012-845a677a561c',
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.data.csv) {
        return { data: response.data.csv };
      }

      return response.data;
    } catch (error) {
      console.error("Error al llamar a la API:", error);
      return { data: "Lo siento, ha ocurrido un error al procesar tu solicitud." };
    }
  }

  // Función para manejar el envío de mensajes
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Agregar mensaje del usuario al estado
    setMessages(prevMessages => [...prevMessages, { text: inputText, sender: "user" }]);
    setInputText("");
    setIsLoading(true);

    try {
      // Llamar a la API con el mensaje del usuario
      const response = await query({
        "user_id": "user123", // Puedes cambiar esto por un ID de usuario real si lo tienes
        "in-0": inputText
      });

      // Agregar la respuesta del bot al estado
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response.data || "No pude encontrar una respuesta", sender: "bot" }
      ]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "Lo siento, ha ocurrido un error al procesar tu mensaje.", sender: "bot" }
      ]);
    } finally {
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
                className={`flex items-start space-x-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "user" ? "bg-p-olivine-200 text-gray-800" : "bg-p-olivine-700 text-white"
                  } max-w-xs`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="w-full p-2 border border-gray-300 rounded-lg text-p-olivine-950 focus:outline-none focus:ring-2 focus:ring-p-olivine-700"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="bg-p-olivine-700 text-white p-2 rounded-lg hover:bg-p-harvest-gold-700 focus:outline-none disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

