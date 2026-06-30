import "../styles/Consultas.css";
import "../styles/TablaTiempos.css";
import Formulario from "../components/consultas/Formulario";
import TablaTiempos from "../components/consultas/TablaTiempos";

function Consultas() {
  return (
    <main className="consultas-page">
      <Formulario />
      <TablaTiempos />
    </main>
  );
}

export default Consultas;