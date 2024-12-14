import { React, useState } from 'react'
import '../CSS/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [isLogged, setIsLogged] = useState(sessionStorage.getItem('isLogged'))
  const [user, setUser] = useState(sessionStorage.getItem('user'))

  return (
    <header className="login-header">
        <nav className="navbar">
        <span className="navbar-logo"><i class="fa-solid fa-user"></i> LOGIN</span>
        <ul className="navbar-links">
            <li><Link to="/inicio">INICIO</Link></li>
            <li><Link to="/cursos">CURSOS</Link></li>
            <li><Link to="/reuniones">REUNIONES</Link></li>
            <li><Link to="/proyecto">PROYECTO</Link></li>
            <li><Link to="/comentarios">CONTACTO Y COMENTARIOS</Link></li>
        </ul>
        </nav>
        <hr />
    </header>
  )
}

export default NavBar
