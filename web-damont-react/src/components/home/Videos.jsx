import "../../styles/Videos.css";
function Videos() {
  return (
    <section className="videos">
      <h2>Trabajos realizados</h2>

      <div className="videos-container">
        <video controls>
          <source src="/videos/golf-mk4.mp4" />
         
        </video>

        <video controls>
          <source src="/videos/pulido-nivus.mp4" type="video/mp4" />
         
        </video>
      </div>
    </section>
  )
}

export default Videos