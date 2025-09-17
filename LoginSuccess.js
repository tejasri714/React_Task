import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <div className="fullscreen">
      <div className="card" style={{ textAlign: "center" }}>
        {/* Green tick */}
        <div
          style={{
            fontSize: "70px",
            color: "green",
            marginBottom: "20px",
          }}
        >
          ✅
        </div>

        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Login Successful
        </div>

        <div
          style={{
            color: "#666",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        >
          Welcome back to your PopX Experience
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
