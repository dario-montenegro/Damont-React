import gallery from '../../data/gallery'
import GalleryCard from './GalleryCard'

function Gallery() {
  return (
    <section className="galeria">

      {gallery.map((item) => (
        <GalleryCard
          key={item.id}
          images={item.images}
          title={item.title}
        />
      ))}

    </section>
  )
}

export default Gallery