import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginPage from "./components/Profile/LoginPage.jsx";
import Profile from "./components/Profile/Profiles.jsx";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product.jsx";
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
      </Routes>

      {/* Header */}

      {/* Main Content */}
      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yazh Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
