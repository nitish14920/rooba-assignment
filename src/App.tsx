import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import React from "react";
import Register from "./pages/register";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewCart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
