import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <Home />      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Yazh Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
