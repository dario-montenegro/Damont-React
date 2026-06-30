import { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({
    vehiculo: "",
    color: "",
    modelo: "",
    comentario: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    horario: "mañana",
    servicios: {
      pulido: false,
      limpieza: false,
      polarizado: false,
      opticas: false,
    },
  });

  // Manejo de inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Manejo de checkboxes
  const handleCheckbox = (e) => {
    const { id, checked } = e.target;

    setForm({
      ...form,
      servicios: {
        ...form.servicios,
        [id]: checked,
      },
    });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📩 DATOS FORMULARIO COMPLETO:");
    console.log(form);

    alert("Consulta enviada ✔");

    // Reset
    setForm({
      vehiculo: "",
      color: "",
      modelo: "",
      comentario: "",
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      horario: "mañana",
      servicios: {
        pulido: false,
        limpieza: false,
        polarizado: false,
        opticas: false,
      },
    });
  };

  return (
    <div className="cont-form">
      <h2 className="titulos-secundarios">Dejanos tu consulta</h2>

      <form onSubmit={handleSubmit}>
        <div className="contenedor-formulario">

          {/* Vehículo */}
          <div className="formulario">
            <label htmlFor="vehiculo">¿Qué vehículo tenés?</label>
            <input
              id="vehiculo"
              type="text"
              name="vehiculo"
              value={form.vehiculo}
              onChange={handleChange}
              placeholder="Ej: Volkswagen Vento"
            />
          </div>

          {/* Color */}
          <div className="formulario">
            <label htmlFor="color">¿Qué color es?</label>
            <input
              id="color"
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              placeholder="Ej: Negro"
            />
          </div>

          {/* Modelo */}
          <div className="formulario">
            <label htmlFor="modelo">¿Qué modelo es?</label>
            <input
              id="modelo"
              type="number"
              name="modelo"
              value={form.modelo}
              onChange={handleChange}
              placeholder="Ej: 2022"
            />
          </div>

          {/* Foto */}
          <div className="formulario">
            <label htmlFor="foto">Foto del vehículo (opcional)</label>
            <input
              id="foto"
              type="file"
            />
          </div>

          {/* Servicios */}
          <div className="formulario">
            <label>¿Qué servicio te interesa?</label>

            <div>
              <input
                type="checkbox"
                id="pulido"
                checked={form.servicios.pulido}
                onChange={handleCheckbox}
              />
              <label htmlFor="pulido"> Pulido</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="limpieza"
                checked={form.servicios.limpieza}
                onChange={handleCheckbox}
              />
              <label htmlFor="limpieza"> Limpieza de interior</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="polarizado"
                checked={form.servicios.polarizado}
                onChange={handleCheckbox}
              />
              <label htmlFor="polarizado"> Polarizado</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="opticas"
                checked={form.servicios.opticas}
                onChange={handleCheckbox}
              />
              <label htmlFor="opticas"> Pulido de ópticas</label>
            </div>
          </div>

          {/* Comentario */}
          <div className="formulario textarea">
            <label htmlFor="comentario">
              Contanos un poco más sobre tu vehículo
            </label>

            <textarea
              id="comentario"
              name="comentario"
              rows="6"
              value={form.comentario}
              onChange={handleChange}
              placeholder="Ej: Necesito realizar un tratamiento de pintura porque perdió brillo..."
            />
          </div>

          {/* Nombre */}
          <div className="formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          {/* Apellido */}
          <div className="formulario">
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="formulario">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ejemplo@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Teléfono */}
          <div className="formulario">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              placeholder="3511234567"
              value={form.telefono}
              onChange={handleChange}
            />
          </div>

          {/* Horario */}
          <div className="formulario">
            <label htmlFor="horario">
              ¿En qué horario preferís que nos comuniquemos?
            </label>

            <select
              id="horario"
              name="horario"
              value={form.horario}
              onChange={handleChange}
            >
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
          </div>

          {/* Botones */}
          <button type="submit" className="boton-enviar">
            Enviar consulta
          </button>

          <button
            type="button"
            className="boton-reset"
            onClick={() =>
              setForm({
                vehiculo: "",
                color: "",
                modelo: "",
                comentario: "",
                nombre: "",
                apellido: "",
                email: "",
                telefono: "",
                horario: "mañana",
                servicios: {
                  pulido: false,
                  limpieza: false,
                  polarizado: false,
                  opticas: false,
                },
              })
            }
          >
            Limpiar formulario
          </button>

        </div>
      </form>
    </div>
  );
}

export default Formulario;