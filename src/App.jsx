import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "./firebase";
import Home from "./components/home";
import Products from "./components/products";
import Rescue from "./components/rescue";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Voucher from "./components/voucher";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AuthRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <div className="mt-16"> {/* Add margin-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/rescue" element={<Rescue />} />
          <Route 
            path="/login" 
            element={
              <AuthRoute user={user}>
                <Login />
              </AuthRoute>
            } 
          />
          <Route 
            path="/register" 
            element={
              <AuthRoute user={user}>
                <Register />
              </AuthRoute>
            } 
          />
          <Route 
            path="/voucher" 
            element={
              <ProtectedRoute user={user}>
                <Voucher user={user} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
