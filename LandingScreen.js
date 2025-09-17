import React from "react";
import { Link } from "react-router-dom";
import "./LandingScreen.css";   // keep this CSS file in the same folder

export default function LandingScreen() {
  return (
    <div className="landing-fullscreen">
      <div className="landing-card">
        {/* Logo or Icon */}
        <div className="landing-logo">🌟</div>

        {/* Title and Subtitle */}
        <div className="landing-title">Welcome to PopX</div>
        <div className="landing-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        {/* Buttons */}
        <div className="landing-buttons">
          <Link to="/signup">
            <button className="landing-btn landing-primary">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="landing-btn landing-secondary">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
