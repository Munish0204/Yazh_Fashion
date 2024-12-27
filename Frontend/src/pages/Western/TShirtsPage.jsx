import React, { useState } from "react";
import "./TShirtsPage.css"; 
import { SecNav } from "../../components/Header/SecNav/SecNav";
const TShirtsPage = () => {
  const products = [
    { id: 1, name: "Casual T-Shirt", price: 499, rating: 4.5, image: "/images/tshirt1.jpg" },
    { id: 2, name: "Graphic Tee", price: 599, rating: 4, image: "/images/tshirt2.jpg" },
    { id: 3, name: "Solid Color T-Shirt", price: 399, rating: 3.5, image: "/images/tshirt3.jpg" },
    { id: 4, name: "Striped T-Shirt", price: 449, rating: 4.2, image: "/images/tshirt4.jpg" },
    { id: 5, name: "V-Neck T-Shirt", price: 349, rating: 4.8, image: "/images/tshirt5.jpg" },
    { id: 6, name: "Polo T-Shirt", price: 699, rating: 5, image: "/images/tshirt6.jpg" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");`  `

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

    <div className="tshirt-page">
      <SecNav />
      <h1 className="page-title">SideOpenTop Collection</h1>

      {/* Search and Sort */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search SideOpenTop..."
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

export default TShirtsPage;
