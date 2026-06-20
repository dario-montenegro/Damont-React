import React from 'react'

function Horarios() {
  return (
 <div className="tabla-horarios">
      <h3>Horarios de atención</h3>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mañana</td>
            <td>08:30 a 12:30</td>
            <td>08:30 a 12:30</td>
            <td>08:30 a 12:30</td>
            <td>08:30 a 12:30</td>
            <td>08:30 a 12:30</td>
            <td>10:00 a 12:30</td>
            <td className="cerrado">CERRADO</td>
          </tr>

          <tr>
            <td>Tarde</td>
            <td>14:00 a 18:30</td>
            <td>14:00 a 18:30</td>
            <td>14:00 a 18:30</td>
            <td>14:00 a 18:30</td>
            <td>14:00 a 18:30</td>
            <td>13:00 a 16:00</td>
            <td className="cerrado">CERRADO</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Horarios
