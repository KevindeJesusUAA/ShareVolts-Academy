import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./paginas/LoginPage";
import { MenuCursos } from "./paginas/MenuCursos";
import { AdminPra } from "./paginas/AdminPra";
import { ProgresoCurso } from "./paginas/ProgresoCurso";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Página de inicio de sesión AdminPra */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/cursos" element={<MenuCursos />} />
        <Route path="/Administracion" element={<AdminPra />} />
        <Route path="/Progreso" element={<ProgresoCurso />} />

        
        {/* Página de registro   <Route path="/registro" element={<RegisterPage />} />*/}
       
        {/* Otras rutas */}
        {/*  <Route path="/inicio" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/contacto" element={<ContactPage />} />*/}
       

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
