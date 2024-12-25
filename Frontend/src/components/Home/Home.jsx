import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import api from "../../api"; // Import your Axios instance
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SecNav } from "../../components/Header/SecNav/SecNav";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = React.useRef(null);

  const baseUrl = "http://192.168.87.25:8000/"; // Replace with your API domain

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await api.get("/homeproduct/"); // Replace with your API endpoint
        setProducts(productsRes.data); // Assuming API returns the provided response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
    arrows: false,
  };

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();

  return (
    <main className="main-content">
      <nav className="secondary-navbar">
        <SecNav />
      </nav>

      <h1>Welcome to Yazh Fashion</h1>
      <p>Explore our trendy collections and amazing offers!</p>

      {/* Carousel */}
      <div className="carousel-container">
        <Slider {...settings} ref={sliderRef}>
          {products
            .filter((product) => product.trending && product.images.length > 0)
            .map((product, index) => (
              <div
                className={`slide ${activeIndex === index ? "active" : ""}`}
                key={product.id}
              >
                <img
                  src={`${baseUrl}${product.images[0].image}`}
                  alt={product.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
        </Slider>
        <div className="custom-buttons">
          <button className="prev-btn" onClick={goToPrev}>
            &lt; Prev
          </button>
          <button className="next-btn" onClick={goToNext}>
            Next &gt;
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="home-container">
        {products.map((product) => (
          <ProductCard product={product} baseUrl={baseUrl} key={product.id} />
        ))}
      </div>
    </main>
  );
}

// Component for Product Card
function ProductCard({ product, baseUrl }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [product.images.length]);

  return (
    <div className="card">
      <img
        src={
          product.images.length > 0
            ? `${baseUrl}${product.images[imageIndex].image}`
            : "https://via.placeholder.com/300"
        }
        alt={product.name}
        className="card-image"
      />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ₹{product.off_price}{" "}
          <span className="std-price">
            <s>₹{product.std_price}</s>
          </span>
        </p>
        <button className="card-button">View all</button>
      </div>
    </div>
  );
}

export default Home;
