// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Informacion from "./pages/Informacion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardAdmin from "./pages/DashboardAdmin";
import Confirm from "./pages/Confirmar";
import Recuperar from "./pages/Recuperar";
import NuevoPassword from "./pages/NuevoPassword";
import RutaProtegida from "./components/RutaProtegida";
import PerfilAdmin from "./pages/admin/PerfilAdmin";

function App() {
  return (
    <Router>
      <Navbar /> {/* Menú visible en todas las páginas */}
      <Routes>
        {/* Páginas Públicas */}
        <Route path="/" element={<Main />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin/activar/:token" element={<Confirm />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/nuevo-password/:token" element={<NuevoPassword />} />

        {/* Páginas Privadas (solo admins autenticados) */}
        <Route
          path="/admin"
          element={
            <RutaProtegida rol="admin">
              <DashboardAdmin />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin/perfil"
          element={
            <RutaProtegida rol="admin">
              <PerfilAdmin />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
