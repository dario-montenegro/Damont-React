import "../../styles/GalleryCard.css";

function GalleryCard({ images, title }) {
  return (
    <div className="contenedor-card">

      <div className="card-galeria">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
          />
        ))}

      </div>

      <h2 className="titulo-galeria">
        {title}
      </h2>

    </div>
  );
}

export default GalleryCard;