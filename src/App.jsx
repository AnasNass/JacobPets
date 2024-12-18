import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Rescue from "./components/rescue";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-16"> {/* Add margin-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/rescue" element={<Rescue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
