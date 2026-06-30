import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/Navbar.css"

function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li className="item-menu">
          <NavLink to="/">Inicio</NavLink>
        </li>

        <li className="item-menu">
          <NavLink to="/horarios">Horarios</NavLink>
        </li>

        <li className="item-menu">
          <NavLink to="/consultas">Consultas</NavLink>
        </li>

        <li className="item-menu">
          <NavLink to="/galeria">Galería</NavLink>
        </li>

        <li className="item-menu">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav