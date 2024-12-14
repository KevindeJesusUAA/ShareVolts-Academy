import React from 'react'
import '../CSS/ProgresoCurso.css'
import fondo from "../assets/fondo.jpg";

export const ProgresoCurso = () => {
  return (
    <div className="course-container">
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
              <img src={fondo} alt="" width="90%" />
            </header>
      <div className="course-body">
        <div className="course-tabs">
          <button className="tab-button active">Power Apps</button>
          <div className="progress-info">
            <span>Progreso</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "1%" }}></div>
            </div>
            <span>1% Completado</span>
          </div>
        </div>

        <table className="course-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nombre del tema</th>
              <th>Secciones</th>
              <th>Estado</th>
              <th>Ejercicios</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Colecciones</td>
              <td>1/6</td>
              <td>Incompleto</td>
              <td>1/6</td>
              <td>
                <button className="start-button">Comenzar</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Galerías</td>
              <td>1/7</td>
              <td>Incompleto</td>
              <td>1/7</td>
              <td>
                <button className="start-button">Comenzar</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Botones</td>
              <td>1/3</td>
              <td>Incompleto</td>
              <td>1/3</td>
              <td>
                <button className="start-button">Comenzar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
