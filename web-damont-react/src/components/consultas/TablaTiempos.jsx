function TablaTiempos() {
  return (
    <div className="tabla-tiempos">
      <h3>Tiempo aproximado de cada servicio</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Vehículo</th>
            <th>Abrillantado</th>
            <th>Abrillantado 2 etapas</th>
            <th>Tratamiento acrílico</th>
            <th>Tratamiento cerámico</th>
            <th>Limpieza de interior</th>
            <th>Pulido de ópticas</th>
            <th>Polarizado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Auto chico</td>
            <td>Medio día</td>
            <td>Día completo</td>
            <td>3-4 días</td>
            <td>5 días</td>
            <td>1 día y medio</td>
            <td>2-3 horas</td>
            <td>Medio día</td>
          </tr>

          <tr>
            <td>Auto mediano</td>
            <td>Medio día</td>
            <td>Día completo</td>
            <td>3-4 días</td>
            <td>5 días</td>
            <td>1 día y medio</td>
            <td>2-3 horas</td>
            <td>Medio día</td>
          </tr>

          <tr>
            <td>Auto grande</td>
            <td>Día completo</td>
            <td>1 día y medio</td>
            <td>4-5 días</td>
            <td>5-6 días</td>
            <td>1 día y medio</td>
            <td>2-3 horas</td>
            <td>Medio día</td>
          </tr>

          <tr>
            <td>Camioneta</td>
            <td>1-1.5 días</td>
            <td>1.5-2 días</td>
            <td>5 días</td>
            <td>5-7 días</td>
            <td>1 día y medio</td>
            <td>2-3 horas</td>
            <td>Medio día</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TablaTiempos