import services from "../../data/services"
import ServiceCard from "../common/ServiceCard"

function Servicios() {
  return (
    <section className="services">
      <h2>Servicios</h2>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Servicios