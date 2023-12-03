import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
