import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import LoginPage from "./components/Profile/LoginPage.jsx";
import Profile from "./components/Profile/Profiles.jsx";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product.jsx";
=======
import TShirtsPage from "./pages/Western/TShirtsPage";
import SkirtsPage from "./pages/Western/SkirtsPage";
import JeansPage from "./pages/Western/JeansPage";
>>>>>>> db7d36170960013edfe2d512ab247edc08f2e8fc
import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Loginpage" element={<LoginPage />} />
      </Routes>

      {/* Header */}

      {/* Main Content */}
      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yazh Fashion. All rights reserved.</p>
      </footer>
    </div>
=======
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
>>>>>>> db7d36170960013edfe2d512ab247edc08f2e8fc
  );
}

export default App;
