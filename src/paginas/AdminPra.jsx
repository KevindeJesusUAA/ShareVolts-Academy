import React from 'react'
import '../CSS/AdminPage.css'
import titulo from '../assets/tituloadmin.jpg'
export const AdminPra = () => {
    return (
        <div className="admin-container">
          <header className="admin-header">
            <img src={titulo} alt="Fondo" className="header-image" />
          </header>
    
          <div className="admin-body">
            <div className="search-section">
              <input type="text" placeholder="Buscar..." className="search-input" />
              <button className="search-button">🔍</button>
              <button className="options-button">OOO</button>
            </div>
    
            <table className="admin-table">
              <tbody>
                <tr>
                  <td>Kevin De Jesus</td>
                  <td className="action-buttons">
                    <button className="edit-button">✏️</button>
                    <button className="delete-button">❌</button>
                  </td>
                </tr>
                <tr>
                  <td>Alan Uziel</td>
                  <td className="action-buttons">
                    <button className="edit-button">✏️</button>
                    <button className="delete-button">❌</button>
                  </td>
                </tr>
                <tr>
                  <td>Daniel</td>
                  <td className="action-buttons">
                    <button className="edit-button">✏️</button>
                    <button className="delete-button">❌</button>
                  </td>
                </tr>
                <tr>
                  <td>Josue Daniel</td>
                  <td className="action-buttons">
                    <button className="edit-button">✏️</button>
                    <button className="delete-button">❌</button>
                  </td>
                </tr>
                <tr>
                  <td>Jose Angel</td>
                  <td className="action-buttons">
                    <button className="edit-button">✏️</button>
                    <button className="delete-button">❌</button>
                  </td>
                </tr>
              </tbody>
            </table>
    
            <div className="pagination">
              <button className="pagination-button">1</button>
              <button className="pagination-button">2</button>
              <button className="pagination-button">3</button>
              <button className="pagination-button">&gt;</button>
            </div>
          </div>
        </div>
      );
}
