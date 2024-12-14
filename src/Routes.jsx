import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./paginas/LoginPage";
import { MenuCursos } from "./paginas/MenuCursos";
import { AdminPra } from "./paginas/AdminPra";
import { ProgresoCurso } from "./paginas/ProgresoCurso";

import HomePage from "./paginas/HomePage";
import ContactPage from "./paginas/ContactPage";
import NavBar from './paginas/NavBar'
import RegisterPage from "./paginas/RegisterPage";
import CommentsPage from "./paginas/CommentsPage";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Página de inicio de sesión AdminPra */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/cursos" element={<MenuCursos />} />
        <Route path="/Administracion" element={<AdminPra />} />
        <Route path="/Progreso" element={<ProgresoCurso />} />

        {/* Página de inicio */}
        <Route path="/" element={<HomePage />} />

        {/* Página de inicio de sesión */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Página de registro   <Route path="/registro" element={<RegisterPage />} />*/}
       
        {/* Otras rutas */}
        {/*  <Route path="/inicio" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/contacto" element={<ContactPage />} />*/}
       
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/comentarios" element={<CommentsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        {/*<Route path="/cursos" element={<CoursesPage />} */}
        

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
