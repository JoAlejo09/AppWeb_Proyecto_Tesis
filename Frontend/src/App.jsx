import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardAdmin from "./pages/DashboardAdmin";
import Confirm from "./pages/Confirmar";
import Recuperar from "./pages/Recuperar"; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/activar/:token" element={<Confirm />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/recuperar" element={<Recuperar />} />
      </Routes>
    </Router>
  );
}

export default App;
