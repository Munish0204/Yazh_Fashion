import React, { useState } from "react";
import "./Straight.css"; // CSS for styling
import { SecNav } from "../../components/Header/SecNav/SecNav";

const StraightPantPage = () => {
  const products = [
    { id: 1, name: "Formal Straight ", price: 1199, rating: 4.6, image: "/images/straightpant1.jpg" },
    { id: 2, name: "Casual Straight ", price: 899, rating: 4.4, image: "/images/straightpant2.jpg" },
    { id: 3, name: "Cotton Straight", price: 749, rating: 4.2, image: "/images/straightpant3.jpg" },
    { id: 4, name: "Printed Straight", price: 1099, rating: 4.7, image: "/images/straightpant4.jpg" },
    { id: 5, name: "Stretchable Straight ", price: 999, rating: 4.5, image: "/images/straightpant5.jpg" },
    { id: 6, name: "Designer Straight ", price: 1299, rating: 4.8, image: "/images/straightpant6.jpg" },
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
    <div className="straight-pant-page">
      <SecNav />
      <h1 className="page-title">Straight Pant Collection</h1>

      {/* Search and Sort */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search Straight Pants..."
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

export default StraightPantPage;
