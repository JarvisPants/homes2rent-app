import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Admin from "./pages/Admin";
import PropertyDetails from "./pages/PropertyDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}