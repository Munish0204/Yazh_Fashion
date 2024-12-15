import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Add CSS styles here

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    arrows: false, // Disable default arrows
  };

  // Custom next/prev button handlers
  const sliderRef = React.useRef(null);

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();

  return (
    <main className="main-content">
      {/* Header */}
      <h1>Welcome to Yazh Fashion</h1>
      <p>Explore our trendy collections and amazing offers!</p>

      {/* Carousel with Buttons */}
      <div className="carousel-container">
        <Slider {...settings} ref={sliderRef}>
          <div className={`slide ${activeIndex === 0 ? "active" : ""}`}>
            <img
              src="https://via.placeholder.com/800x400?text=Trendy+Fashion+1"
              alt="Fashion Slide 1"
            />
          </div>
          <div className={`slide ${activeIndex === 1 ? "active" : ""}`}>
            <img
              src="https://via.placeholder.com/800x400?text=Trendy+Fashion+2"
              alt="Fashion Slide 2"
            />
          </div>
          <div className={`slide ${activeIndex === 2 ? "active" : ""}`}>
            <img
              src="https://via.placeholder.com/800x400?text=Trendy+Fashion+3"
              alt="Fashion Slide 3"
            />
          </div>
        </Slider>

        {/* Custom Buttons */}
        <div className="custom-buttons">
          <button className="prev-btn" onClick={goToPrev}>
            &lt; Prev
          </button>
          <button className="next-btn" onClick={goToNext}>
            Next &gt;
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="home-container">
          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://via.placeholder.com/300"
              alt="Product"
              className="card-image"
            />
            <div className="card-content">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button className="card-button">View More</button>
            </div>
          </div>
      </div>
    </main>
  );
}

export default Home;
