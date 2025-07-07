import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
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
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin/activar/:token" element={<Confirm />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/nuevo-password/:token" element={<NuevoPassword />} />

        {/* Rutas Protegidas para Admin */}
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
