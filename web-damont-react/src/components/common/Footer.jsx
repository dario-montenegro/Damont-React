import React from 'react'
import "../../styles/Footer.css"


function Footer() {
  return (
    <footer id='contacto'>
      <div className="footer-iconos">
        <a
          href="https://wa.me/message/RW7VMYCQZSYLE1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <a
          href="https://www.instagram.com/damont_esteticavehicular/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-btn"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://www.facebook.com/damont.colonia.caroya.2025?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-btn"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a
          href="https://maps.app.goo.gl/RwS6tBeC15AECt8i7"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-btn"
        >
          <i className="fa-solid fa-location-dot"></i>
        </a>
      </div>

      <div className="footer-contacto">
        <div className="datos-contacto">
          <h4 className="titulo-contacto">Datos de contacto</h4>

          <ul>
            <li>Teléfono: (3525) 482041</li>
            <li>Email: dario.montenegro03721@gmail.com</li>
            <li>
              Ubicación: Calle Carlos Griguol N° 1550,
              Colonia Caroya, Córdoba
            </li>
          </ul>
        </div>

        <div className="logo-contenedor">
          <img
            className="logo-footer"
            src='/logo-damont.png'
            alt="Logo Damont"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer