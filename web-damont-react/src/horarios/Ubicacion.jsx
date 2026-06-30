import "../styles/Mapa.css";
function Ubicacion() {
  return (
    <div className="mapa">
      <h3>Ubicación</h3>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.7454462704745!2d-64.08888666313116!3d-31.005474376608053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943263279eff4003%3A0x17501c2791c6acb6!2sDamont%20Est%C3%A9tica%20Vehicular!5e0!3m2!1ses!2sar!4v1775934636970!5m2!1ses!2sar"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Damont Estética Vehicular"
      />
    </div>
  )
}

export default Ubicacion