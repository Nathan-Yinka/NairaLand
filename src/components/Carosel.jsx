import React from 'react'
import carosel1 from '../assest/carosel/carosel1.png'
import carosel2 from '../assest/carosel/carrosel2.png'
import forward from '../assest/carosel/forward.png'
import backword from '../assest/carosel/backward.png'

const Carosel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active carosel">
      <img src={carosel1} className="d-block w-100 img-fluid" alt="..." />
      <div class="carousel-caption  d-md-block">
        <h5>The Future of Artificial Intellegience: Friend or foe?</h5>
      </div>
    </div>
    <div className="carousel-item carosel">
      <img src={carosel2} className="d-block w-100 img-fluid" alt="..." />
      <div class="carousel-caption  d-md-block">
        <h5>The Future of Artificial Intellegience: Friend or foe?</h5>
      </div>
    </div>
    <div className="carousel-item carosel">
      <img src={carosel1} className="d-block w-100 img-fluid" alt="..." />
      <div class="carousel-caption  d-md-block">
        <h5>The Future of Artificial Intellegience: Friend or foe?</h5>
      </div>
    </div>
  </div>
  <button className="backward control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <img src={backword} alt="" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="forward control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <img src={forward} alt="" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carosel