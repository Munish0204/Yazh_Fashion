import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginPage from "./components/Profile/LoginPage.jsx";
import Profile from "./components/Profile/Profiles.jsx";
import Product from "./components/Product/Product.jsx";
import SearchResults from "./components/Home/searchresults.jsx";
import TShirtsPage from "./pages/Western/TShirtsPage";
import SkirtsPage from "./pages/Western/SkirtsPage";
import JeansPage from "./pages/Western/JeansPage";
import Duppatta from "./pages/Western/Duppatta.jsx";
import "./App.css";

function App() {
  return (

    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/women-western/tops" element={<TShirtsPage />} />
        <Route path="/women-western/dresses" element={<SkirtsPage />} />
        <Route path="/women-western/jeans" element={<JeansPage />} />
        <Route path="/women-western/duppatta" element={<Duppatta />} />
      </Routes>
      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yazh Fashion. All rights reserved.</p>
      </footer>
    </div>

  );
}

export default App;
