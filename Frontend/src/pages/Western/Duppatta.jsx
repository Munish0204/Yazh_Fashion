import { useState } from "react";
import "./Duppatta.css"; // CSS for styling
import { SecNav } from "../../components/Header/SecNav/SecNav";

const DupattaPage = () => {
  const products = [
    { id: 1, name: "Silk Dupatta", price: 799, rating: 4.7, image: "/images/dupatta1.jpg" },
    { id: 2, name: "Cotton Dupatta", price: 499, rating: 4.2, image: "/images/dupatta2.jpg" },
    { id: 3, name: "Embroidered Dupatta", price: 1299, rating: 4.8, image: "/images/dupatta3.jpg" },
    { id: 4, name: "Georgette Dupatta", price: 899, rating: 4.3, image: "/images/dupatta4.jpg" },
    { id: 5, name: "Chiffon Dupatta", price: 1099, rating: 4.5, image: "/images/dupatta5.jpg" },
    { id: 6, name: "Linen Dupatta", price: 799, rating: 4.1, image: "/images/dupatta6.jpg" },
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
    <div className="dupatta-page">
      <SecNav />

      <h1 className="page-title">Dupatta Collection</h1>

      {/* Search and Sort */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search Dupattas..."
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

export default DupattaPage;
