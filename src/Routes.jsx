import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./paginas/LoginPage";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Página de inicio de sesión */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Otras rutas */}
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/contacto" element={<ContactPage />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
