import React from "react";
import Header from "./components/Header/Header"; // Adjust the path based on your project structure
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Yazh Fashion</h1>
        <p>Explore our trendy collections and amazing offers!</p>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yash Fashion . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
