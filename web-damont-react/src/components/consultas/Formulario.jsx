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

  // Manejo inputs normales
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Checkboxes
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

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📩 DATOS FORMULARIO COMPLETO:");
    console.log(form);

    alert("Consulta enviada ✔");

    // RESET
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

          {/* VEHICULO */}
          <div className="formulario">
            <label>¿Qué vehículo tenés?</label>
            <input
              type="text"
              name="vehiculo"
              value={form.vehiculo}
              onChange={handleChange}
            />
          </div>

          {/* COLOR */}
          <div className="formulario">
            <label>¿Qué color es?</label>
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
            />
          </div>

          {/* MODELO */}
          <div className="formulario">
            <label>¿Qué modelo es?</label>
            <input
              type="number"
              name="modelo"
              value={form.modelo}
              onChange={handleChange}
            />
          </div>

          {/* FOTO (no se maneja en state por simplicidad) */}
          <div className="formulario">
            <label>Foto del vehículo</label>
            <input type="file" />
          </div>

          {/* CHECKBOXES */}
          <div className="formulario">
            <label>Servicios</label>

            <div>
              <input
                type="checkbox"
                id="pulido"
                checked={form.servicios.pulido}
                onChange={handleCheckbox}
              />
              Pulido
            </div>

            <div>
              <input
                type="checkbox"
                id="limpieza"
                checked={form.servicios.limpieza}
                onChange={handleCheckbox}
              />
              Limpieza interior
            </div>

            <div>
              <input
                type="checkbox"
                id="polarizado"
                checked={form.servicios.polarizado}
                onChange={handleCheckbox}
              />
              Polarizado
            </div>

            <div>
              <input
                type="checkbox"
                id="opticas"
                checked={form.servicios.opticas}
                onChange={handleCheckbox}
              />
              Ópticas
            </div>
          </div>

          {/* COMENTARIO */}
          <textarea
            name="comentario"
            value={form.comentario}
            onChange={handleChange}
            rows="6"
            placeholder="Contanos tu problema..."
          />

          {/* DATOS */}
          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
          />

          {/* SELECT */}
          <select
            name="horario"
            value={form.horario}
            onChange={handleChange}
          >
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>

          {/* BOTONES */}
          <button type="submit" className="boton-enviar">
            Enviar
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
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;