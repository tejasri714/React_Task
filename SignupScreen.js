import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupScreen() {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Normally you’d validate and save data here
    navigate("/profile");  // navigate to Profile page
  };

  return (
    <div className="fullscreen">
      <div className="card">
        <div className="title">Create your PopX account</div>
        <div className="subtitle">
          Please fill in the required details to create a new account.
        </div>

        <form onSubmit={handleCreateAccount}>
          <div className="input-group">
            <label className="input-label">
              Full Name<span className="required">*</span>
            </label>
            <input className="input" type="text" required placeholder="Enter full name" />
          </div>

          <div className="input-group">
            <label className="input-label">
              Phone Number<span className="required">*</span>
            </label>
            <input className="input" type="tel" required placeholder="Enter phone number" />
          </div>

          <div className="input-group">
            <label className="input-label">
              Email Address<span className="required">*</span>
            </label>
            <input className="input" type="email" required placeholder="Enter email address" />
          </div>

          <div className="input-group">
            <label className="input-label">
              Password<span className="required">*</span>
            </label>
            <input className="input" type="password" required placeholder="Enter password" />
          </div>

          <div className="input-group">
            <label className="input-label">Company Name</label>
            <input className="input" type="text" placeholder="Enter company name" />
          </div>

          <div className="input-group">
            <label className="input-label">
              Are you an Agency?<span className="required">*</span>
            </label>
            <div className="radio-group">
              <label>
                <input type="radio" name="agency" defaultChecked /> Yes
              </label>
              <label>
                <input type="radio" name="agency" /> No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
