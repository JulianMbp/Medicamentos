'use client';
import { useState } from "react";
import Header from "@/app/sections/header";

export default function IA() {
  const [messages, setMessages] = useState([
    { text: "Hola, ¿en qué puedo ayudarte?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function query(data) {
    try {
      const apiResponse = await fetch(
        "https://api.stack-ai.com/inference/v0/run/60cd6513-9f24-44a1-a79b-2df141893f42/675dfa80bf0df9450af6300b",
        {
          headers: {
            Authorization: 'Bearer 44be65a5-2a92-485a-9f28-593a7d80feb6',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      if (!apiResponse.ok) {
        throw new Error(`Error en la solicitud: ${apiResponse.statusText}`);
      }

      const result = await apiResponse.json();
      return result?.outputs?.["out-0"] || "No pude encontrar una respuesta";
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      return "Lo siento, ocurrió un error al procesar tu solicitud.";
    }
  }

  const handleSendMessage = async () => {
    if (!inputText) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user" }
    ]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await query({ "in-0": inputText });

      let parsedResponse;
      try {
        parsedResponse = JSON.parse(response); // Intentar parsear como JSON
      } catch {
        parsedResponse = response; // Si no es JSON, mostrar texto plano
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: parsedResponse, sender: "bot" }
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Lo siento, ocurrió un error al procesar tu solicitud.", sender: "bot" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessageContent = (message) => {
    if (typeof message.text === "object" && message.text.medicamentos_a_reabastecer) {
      return (
        <ul>
          {message.text.medicamentos_a_reabastecer.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>Medicamento:</strong> {item.Medicamento}<br />
              <strong>Stock Restante:</strong> {item.Stock_Restante}<br />
              <strong>Demanda Prevista:</strong> {item.Demanda_Prevista}<br />
              <strong>Ubicación:</strong> {item.Ubicacion}
            </li>
          ))}
        </ul>
      );
    }
    return <p>{message.text}</p>;
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
                  className={`p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-p-olivine-200 text-gray-800"
                      : "bg-p-olivine-700 text-white"
                  } max-w-xs`}
                >
                  {renderMessageContent(message)}
                </div>
              </div>
            ))}
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
