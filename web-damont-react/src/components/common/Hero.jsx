import React from 'react'
import "../../styles/Home.css"

function Hero() {
  return (
    <div>
    
        <img
            className="imagen-portada"
            src="/portada.jpg"
            alt="Portada"
        />

        <h1 className="titulo-principal"> Bienvenidos a Damont Estetica Vehícular</h1>
    </div>
  )
}

export default Hero