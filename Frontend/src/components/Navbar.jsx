// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={{ backgroundColor: "#ffffff", padding: "15px 30px", borderBottom: "1px solid #ddd" }}>
      <h3 style={{ margin: 0 }}>Panel de Administrador</h3>
        <Link to="/" className="text-2xl font-bold text-purple-700">
          MentalAPP
        </Link>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-600 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/informacion" className="hover:text-purple-600 transition">
              Información
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-purple-600 transition">
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
