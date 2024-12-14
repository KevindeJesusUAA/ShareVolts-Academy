import React, { useState } from "react";
import "../CSS/RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Registro exitoso");
  };

  return (
    <div className="register-page">
      <div className="login-banner">
        <h1>SHAREVOLTS</h1>
      </div>

      <div className="register-container">
        <h2>REGISTRO</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Edad</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Edad"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit">REGISTRAR</button>
        </form>

        <div className="register-footer">
          <span>¿Ya tienes cuenta?</span>
          <a href="/login">ACCEDER</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
