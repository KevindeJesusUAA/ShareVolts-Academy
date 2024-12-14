import React from "react";
import { Link } from "react-router-dom";
import "../CSS/LoginPage.css";

const LoginPage = () => {
    return (
      <div className="login-page">
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
              <input type="email" id="email" placeholder="Tu email" required />
  
              <label htmlFor="password">CONTRASEÑA</label>
              <input type="password" id="password" placeholder="Tu contraseña" required />
  
              <button type="submit">ACCEDER</button>
            </form>
          </div>
        </main>
      </div>
    );
  };
  
export default LoginPage;
