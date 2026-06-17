import React from 'react'

function Formulario() {
  return (
    <div>
        <div className="cont-form">
        <h2 className="titulos-secundarios">Dejanos tu consulta</h2>

        <form>
          <div className="contenedor-formulario">

            <div className="formulario">
              <label htmlFor="vehiculo">¿Qué vehículo tenés?</label>
              <input
                type="text"
                id="vehiculo"
                name="vehiculo"
                placeholder="VW Gol, Ford Ka, etc."
              />
            </div>

            <div className="formulario">
              <label htmlFor="color">¿Qué color es?</label>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="Negro, Blanco, etc."
              />
            </div>

            <div className="formulario">
              <label htmlFor="modelo">¿Qué modelo es?</label>
              <input
                type="number"
                id="modelo"
                name="modelo"
                placeholder="1995, 2010, etc."
              />
            </div>

            <div className="formulario">
              <label htmlFor="foto">
                Dejá aquí una foto de tu vehículo (opcional)
              </label>

              <input
                type="file"
                id="foto"
                name="foto"
              />
            </div>

            <div className="formulario">
              <label>¿Qué servicio te interesa?</label>

              <div>
                <input type="checkbox" id="pulido" />
                <label htmlFor="pulido">Pulido</label>
              </div>

              <div>
                <input type="checkbox" id="limpieza" />
                <label htmlFor="limpieza">Limpieza de interior</label>
              </div>

              <div>
                <input type="checkbox" id="polarizado" />
                <label htmlFor="polarizado">Polarizado</label>
              </div>

              <div>
                <input type="checkbox" id="opticas" />
                <label htmlFor="opticas">Pulido de ópticas</label>
              </div>
            </div>

            <h4>
              Dejanos algún detalle que te interese contarnos de tu vehículo
            </h4>

            <textarea
              name="comentario"
              id="comentario"
              rows="10"
              cols="50"
              placeholder="Necesito limpiar la alfombra porque ingresó agua al vehículo"
            />

            <h4>Dejanos tus datos para comunicarnos con vos</h4>

            <div className="formulario">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                required
                placeholder="Escribe aquí..."
              />
            </div>

            <div className="formulario">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                required
                placeholder="Escribe aquí..."
              />
            </div>

            <div className="formulario">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="formulario">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                placeholder="3525662288"
              />
            </div>

            <div className="formulario">
              <label htmlFor="horario">
                ¿En qué horario te gustaría que nos comuniquemos?
              </label>

              <select id="horario">
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="noche">Noche</option>
              </select>
            </div>

            <button className="boton-enviar" type="submit">
              Enviar
            </button>

            <button className="boton-reset" type="reset">
              Reset
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Formulario