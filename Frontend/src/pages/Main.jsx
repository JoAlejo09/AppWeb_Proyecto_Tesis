// src/pages/Main.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
<<<<<<< Updated upstream
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/freepik.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-10 shadow-lg text-center max-w-md w-full">
          <h1 className="text-4xl font-bold text-white mb-2">
            Bienvenido a <span className="text-purple-300">MentalAPP</span>
          </h1>
          <p className="text-white text-md mb-6">Tu espacio para el bienestar mental</p>

          <div className="flex flex-col gap-4">
            <button
              className="py-2 px-4 bg-purple-600 hover:bg-purple-800 text-white rounded-md transition"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </button>
            <button
              className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition"
              onClick={() => navigate("/registro")}
            >
              Registrarse
            </button>
          </div>
=======
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl p-10 bg-white shadow-xl rounded-3xl border border-gray-200">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">Bienvenido a MentalAPP</h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Plataforma integral para apoyar la salud mental de los estudiantes.
          Accede a herramientas de evaluación, recursos de bienestar y conecta con profesionales
          en un entorno seguro y privado.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigate("/registro")}
            className="px-6 py-3 bg-white border border-purple-600 text-purple-700 font-medium rounded-lg hover:bg-purple-100 transition duration-300"
          >
            Registrarse
          </button>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
};

export default Main;
