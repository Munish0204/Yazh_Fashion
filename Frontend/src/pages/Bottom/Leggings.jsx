import React, { useState } from "react";
import "./Leggings.css"; // CSS for styling
import { SecNav } from "../../components/Header/SecNav/SecNav";

const LeggingsPage = () => {
  const products = [
    { id: 1, name: "Comfy Cotton ", price: 499, rating: 4.5, image: "/images/leggings1.jpg" },
    { id: 2, name: "Stretchy High-Waist ", price: 699, rating: 4.2, image: "/images/leggings2.jpg" },
    { id: 3, name: "Ankle-Length ", price: 599, rating: 4.8, image: "/images/leggings3.jpg" },
    { id: 4, name: "Printed ", price: 799, rating: 4.3, image: "/images/leggings4.jpg" },
    { id: 5, name: "Slim-Fit ", price: 899, rating: 4.6, image: "/images/leggings5.jpg" },
    { id: 6, name: "Workout ", price: 999, rating: 4.7, image: "/images/leggings6.jpg" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Handle Search
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  // Handle Sort
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];

    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="leggings-page">
      <SecNav />
      <center>
        <h1 className="page-title">Leggings Collection</h1>
        </center>
      

      {/* Search and Sort */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search Leggings..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select onChange={handleSort} value={sortOrder} className="sort-dropdown">
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ₹{product.price}</p>
            <div className="product-rating">
              {"\u2605".repeat(Math.floor(product.rating))} ({product.rating})
            </div>
            <div className="buttons">
              <button className="buy-btn">Add to Cart</button>
              <button className="wishlist-btn">❤️ Wishlist</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="pagination">
        <button>{"<"}</button>
        <span>Page 1 of 1</span>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default LeggingsPage;
