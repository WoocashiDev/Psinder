import React from 'react';

const Testimonials = () => {
    return(
        <section id="testimonials">

        <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active testimonial-item">
              <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
              <img className="testimonial-image"src="images/dog-img.jpg" alt="dog-profile"/>
              <em>Pebbles, New York</em>
            </div>
            <div className="carousel-item testimonial-item">
              <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
              <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/>
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    
      </section>
    )
}

export default Testimonials