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
import Leggings from "./pages/Bottom/Leggings.jsx"; 
import Patiala from "./pages/Bottom/Patiala.jsx";
import Plazzo from "./pages/Bottom/Plazzo.jsx";
import Straight from "./pages/Bottom/Straight.jsx";
import Cigar from "./pages/Bottom/Cigar.jsx";
import Skirt from "./pages/Bottom//Skirt.jsx"
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
        <Route path="/Casual-wear/SideOpenTop" element={<TShirtsPage />} />
        <Route path="/Casual-wear/Anarkali" element={<SkirtsPage />} />
        <Route path="/Casual-wear/PieceSets" element={<JeansPage />} />
        <Route path="/Casual-wear/duppatta" element={<Duppatta />} />
        <Route path="/bottom/leggings" element={<Leggings />} />
        <Route path="/bottom/patiala" element={<Patiala />} />
        <Route path="/bottom/plazzo" element={<Plazzo />} />
        <Route path="/bottom/straightPant" element={<Straight />} />
        <Route path="/bottom/CigarPant" element={<Cigar />} />
        <Route path="/bottom/Skirt" element={<Skirt />} />

      </Routes>
      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yazh Fashion. All rights reserved.</p>
      </footer>
    </div>

  );
}

export default App;
