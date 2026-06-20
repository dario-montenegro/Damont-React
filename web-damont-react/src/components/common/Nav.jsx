import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
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

          <li>
            <a href="#contacto">Contacto</a>
          </li>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav