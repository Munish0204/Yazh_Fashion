import React, { useState } from "react";
import "./Header.css";
import data from "./indiaStatesDistricts.json"; // Import JSON file for districts
import Western from "../../assets/Nav pic/Western.png";
import Kids from "../../assets/Nav pic/Kids.png";
import Sports from "../../assets/Nav pic/Sports wear.png";
import Tshirt from "../../assets/Nav pic/t'shirt and track.png";
import Ethnic from "../../assets/Nav pic/ethnic wear.png";

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
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/categories">Categories</a>
          <a href="/profile">Profile</a>
        </nav>

        {/* Cart Icon */}
        <div className="header-icons">
          <a href="/cart" className="cart-icon">🛒 Cart</a>
        </div>
      </header>

      {/* Secondary Navbar
      <nav className="secondary-navbar">
        <a href="/women-western">
          <img src={Western} alt="Women Western" />
          Women Western
        </a>
        <a href="/kids">
          <img src={Kids} alt="Kids" />
          Kids
        </a>
        <a href="/ethnic-wear">
          <img src={Ethnic} alt="Ethnic Wear" />
          Ethnic Wear
        </a>
        <a href="/tshirts">
          <img src={Tshirt} alt="T-Shirts" />
          T-Shirts & Tracks
        </a>
        <a href="/sports-wear">
          <img src={Sports} alt="Sports Wear" />
          Sports Wear
        </a>
      </nav> */}
    </>
  );
};

export default Header;
