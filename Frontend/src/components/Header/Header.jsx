import React, { useState } from "react";
import "./Header.css";
import data from "./indiaStatesDistricts.json"; // Import JSON file for districts
import logo from "../../assets/Yazhlogo.jpg";
import { Link } from "react-router-dom";

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
        <h2 className="logo">Yazh</h2>
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
          <Link to="/">🏠 Home</Link>
          <Link to="/Product">🛍️ Products</Link>
          <Link to="/LoginPage">👤 Profile</Link>
          <a href="/Favorite">❤️ Favorite</a>
          <a href="/cart"> 🛒 Cart</a>
        </nav>
      </header>

      
    </>
  );
};

export default Header;
