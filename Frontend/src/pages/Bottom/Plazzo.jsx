import React, { useState } from "react";
import "./Plazzo.css"; // CSS for styling
import { SecNav } from "../../components/Header/SecNav/SecNav";

const PlazzoPage = () => {
  const products = [
    { id: 1, name: "Silk Plazzo", price: 899, rating: 4.5, image: "/images/plazzo1.jpg" },
    { id: 2, name: "Cotton Plazzo", price: 499, rating: 4.2, image: "/images/plazzo2.jpg" },
    { id: 3, name: "Embroidered Plazzo", price: 1299, rating: 4.8, image: "/images/plazzo3.jpg" },
    { id: 4, name: "Printed Plazzo", price: 699, rating: 4.3, image: "/images/plazzo4.jpg" },
    { id: 5, name: "Chiffon Plazzo", price: 799, rating: 4.1, image: "/images/plazzo5.jpg" },
    { id: 6, name: "Linen Plazzo", price: 999, rating: 4.6, image: "/images/plazzo6.jpg" },
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
    <div className="plazzo-page">
      <SecNav />
      <h1 className="page-title">Plazzo Collection</h1>

      {/* Search and Sort */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search Plazzos..."
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

export default PlazzoPage;
