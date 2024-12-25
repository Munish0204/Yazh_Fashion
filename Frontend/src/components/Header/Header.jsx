import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Use axios for API requests
import "./Header.css";
import data from "./indiaStatesDistricts.json"; // Import JSON file for districts

const Header = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(localStorage.getItem("district") || "");
  const [districts, setDistricts] = useState(data["Tamil Nadu"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const baseUrl = "http://192.168.87.25:8000"; // Replace with your API domain

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/`); // Replace with your endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle district selection
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    localStorage.setItem("district", district);
  };

  // Clear district from localStorage on logout
  const handleLogout = () => {
    localStorage.removeItem("district");
    setSelectedDistrict("");
  };

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
      setFilteredProducts(results);
      setSearchSuggestions(results.slice(0, 5)); // Show top 5 suggestions
    } else {
      setFilteredProducts([]);
      setSearchSuggestions([]);
    }
  };

  // Navigate to search results page
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    navigate("/search", { state: { filteredProducts, searchTerm } });
    setIsSearching(false);
  };

  return (
    <>
      <header className="header">
        {/* Logo */}
        <h2 className="logo">Yazh</h2>
        {/* Location Input */}
        <div className="header-location">
          <select
            className="location-dropdown"
            onChange={handleDistrictChange}
            value={selectedDistrict}
          >
            <option value="">{selectedDistrict || "Select District"}</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <form className="header-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch}
            disabled={isSearching}
          />
          <button type="submit" className="search-button" disabled={isSearching}>🔍</button>
          {searchSuggestions.length > 0 && (
            <ul className="search-suggestions">
              {searchSuggestions.map((suggestion) => (
                <li key={suggestion.id}>{suggestion.name}</li>
              ))}
            </ul>
          )}
        </form>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">🏠 Home</Link>
          <Link to="/Product">🛍️ Products</Link>
          <Link to="/LoginPage">👤 Profile</Link>
          <Link to="/cart"> 🛒 Cart</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
