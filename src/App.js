import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
