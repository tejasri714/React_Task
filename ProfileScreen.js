import React from "react";

export default function ProfileScreen() {
  return (
    <div className="fullscreen">
      <div className="card" style={{ textAlign: "left" }}>
        <div className="title" style={{ textAlign: "center" }}>
          Account Settings
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
          <img
            src="https://via.placeholder.com/70"
            alt="Profile"
            className="profile-img"
          />
          <div style={{ marginLeft: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>Mary Doe</div>
            <div style={{ color: "#7b3eff", fontSize: "14px" }}>mary@gmail.com</div>
          </div>
        </div>

        <p style={{ color: "#666", marginTop: "25px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
    </div>
  );
}
