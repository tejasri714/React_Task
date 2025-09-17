import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Normally validate here. For demo we directly navigate:
    navigate("/login-success");
  };

  return (
    <div className="fullscreen">
      <div className="card">
        <div className="title">Login to PopX</div>
        <div className="subtitle">Enter your credentials to continue</div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
