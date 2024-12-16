import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import TShirtsPage from "./pages/Western/TShirtsPage";
import SkirtsPage from "./pages/Western/SkirtsPage";
import JeansPage from "./pages/Western/JeansPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main Content with Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women-western/tops" element={<TShirtsPage />} />
          <Route path="/women-western/dresses" element={<SkirtsPage />} />
          <Route path="/women-western/jeans" element={<JeansPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 Yazh Fashion. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
