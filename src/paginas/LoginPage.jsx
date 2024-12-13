import React from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginPage.css";

const LoginPage = () => {
    return (
      <div className="login-page">
        <header className="login-header">
          <nav className="navbar">
            <span className="navbar-logo">LOGIN</span>
            <ul className="navbar-links">
              <li><Link to="/inicio">INICIO</Link></li>
              <li><Link to="/cursos">CURSOS</Link></li>
              <li><Link to="/reuniones">REUNIONES</Link></li>
              <li><Link to="/proyecto">PROYECTO</Link></li>
              <li><Link to="/contacto">CONTACTO Y COMENTARIOS</Link></li>
            </ul>
          </nav>
        </header>
  
        <main className="login-main">
          <div className="login-banner">
            <h1>SHAREVOLTS</h1>
          </div>
          <div className="login-form-container">
            <h2>ACCEDE A TU CUENTA</h2>
            <div className="login-options">
              <span>¿No dispones de cuenta?</span>
              <Link to="/registro">REGÍSTRATE</Link>
            </div>
            <form className="login-form">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" placeholder="Tú email" required />
  
              <label htmlFor="password">CONTRASEÑA</label>
              <input type="password" id="password" placeholder="Tú contraseña" required />
  
              <button type="submit">ACCEDER</button>
            </form>
          </div>
        </main>
      </div>
    );
  };
  
export default LoginPage;
