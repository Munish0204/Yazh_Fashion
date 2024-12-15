import React, { useState } from "react";
import "./Header.css";
import data from "./indiaStatesDistricts.json"; // Import JSON file for districts
import {SecNav} from "../../components/Header/SecNav/SecNav"

const Header = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Store selected district
  const [districts, setDistricts] = useState(data["Tamil Nadu"] || []); // Default to Tamil Nadu districts or empty list

  // Handle district selection
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="logo">YAZH</div>

        {/* Location Input */}
        <div className="header-location">
          {/* District Dropdown */}
          <select
            className="location-dropdown"
            onChange={handleDistrictChange}
            value={selectedDistrict}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="header-search">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="/">🏠 Home</a>
          <a href="/products">🛍️ Products</a>
          <a href="/profile">👤 Profile</a>
          <a href="/cart"></a>
        </nav>

        {/* Cart Icon */}
        <div className="header-icons">
          <a href="/cart" className="cart-icon">🛒 Cart</a>
        </div>
      </header>

      {/* Secondary Navbar */}
      <nav className="secondary-navbar">
            <SecNav />
      </nav>
    </>
  );
};

export default Header;
