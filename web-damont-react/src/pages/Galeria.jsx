import "../styles/Galeria.css";
import Gallery from "../components/galeria/Gallery";

function Galeria() {
  return (
    <main className="galeria-page">
      <h2 className="galeria-titulo">
        Algunos de nuestros trabajos
      </h2>

      <Gallery />
    </main>
  );
}

export default Galeria;