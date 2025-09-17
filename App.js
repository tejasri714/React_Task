import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import ProfileScreen from "./components/ProfileScreen";
import LoginSuccess from "./components/LoginSuccess";   // ✅ NEW
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login-success" element={<LoginSuccess />} /> {/* ✅ NEW */}
      </Routes>
    </Router>
  );
}

export default App;
