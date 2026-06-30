import "../../styles/ServiceCard.css";
function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard