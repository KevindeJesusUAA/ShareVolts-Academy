import React, { useState } from "react";
import "../CSS/CommentsPage.css";
import { Link } from "react-router-dom";

const CommentsPage = () => {
  const [comments, setComments] = useState([
    {
      date: "20-Sep-2023",
      user: "Usuario 1",
      text: "Utilizar esta página web como practicante me resultó muy útil e interesante ya que aprendí todos los temas y observaba mi progreso día con día.",
    },
    {
      date: "12-Feb-2024",
      user: "Usuario 2",
      text: "Agradezco a los creadores de la página web ya que pensaron en las personas que empiezan a conocer el mundo de Microsoft 365.",
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.comment) {
      setComments([
        ...comments,
        {
          date: new Date().toLocaleDateString(),
          user: newComment.name,
          text: newComment.comment,
        },
      ]);
      setNewComment({ name: "", email: "", comment: "" });
      alert("Comentario publicado exitosamente");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="comments-page">
      <div className="login-banner">
        <h1>COMENTARIOS</h1>
      </div>

      <div className="comments-container">
        <div className="comments-list">
          <h2>Comentarios</h2>
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p>
                <strong>Publicado el {comment.date}</strong>
              </p>
              <p>{comment.text}</p>
            </div>
          ))}
          <br />
          <Link to="/contacto">IR A CONTACTO</Link>
        </div>

        <div className="comment-form">
          <h2>Deja una Respuesta</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={newComment.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              value={newComment.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="comment">Comentario</label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Escribe tu comentario..."
              value={newComment.comment}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">PUBLICAR EL COMENTARIO</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
