import React, { useState } from "react";
import "../CSS/ContactPage.css";
import { Link } from "react-router-dom";

const mentors = [
  { id: 1, name: "Juan Daniel", position: "Senior", email: "juandaniel@gmail.com" },
  { id: 2, name: "Emiliano Zaragoza", position: "Senior", email: "emiliano@gmail.com" },
  { id: 3, name: "Ana Salas", position: "Junior", email: "ana@gmail.com" },
  { id: 4, name: "Julián López", position: "Mid-level", email: "julian@gmail.com" },
];

const ContactPage = () => {
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);

  const handleMentorSelection = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleRequest = () => {
    alert(`Asesoría solicitada con ${selectedMentor.name}`);
  };

  return (
    <div className="contact-page">
      <div className="login-banner">
        <h1>CONTACTO</h1>
      </div>

      <div className="contact-container">
        <div className="mentor-list">
          <h2>POWER BI</h2>
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className={`mentor-item ${
                selectedMentor.id === mentor.id ? "selected" : ""
              }`}
              onClick={() => handleMentorSelection(mentor)}
            >
              <span>{mentor.id}</span> {mentor.name}
            </div>
          ))}
          <br />
          <Link to="/comentarios">IR A COMENTARIOS</Link>
        </div>

        <div className="mentor-details">
          <h2>Contacto</h2>
          <form>
            <label htmlFor="mentor">Mentor</label>
            <input type="text" id="mentor" value={selectedMentor.name} readOnly />

            <label htmlFor="position">Puesto</label>
            <input
              type="text"
              id="position"
              value={selectedMentor.position}
              readOnly
            />

            <label htmlFor="email">Correo</label>
            <input type="email" id="email" value={selectedMentor.email} readOnly />

            <button type="button" onClick={handleRequest}>
              SOLICITAR ASESORÍA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
