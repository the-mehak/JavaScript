import React from "react";
import "./refer.css";

export default function ReferModal({ user, onClose }) {
  const totalReferrals = 1000;
  const currentReferrals = user?.referrals ?? 0;

  const percentage = Math.min((currentReferrals / totalReferrals) * 100, 100);

  const handleStart = () => {
    if (user?.isLoggedIn) {
      window.location.href = "/home";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>🚀 Refer & Earn 2% Lifetime</h2>

        <div className="wallet-card">
          <p>Total Referral Earnings</p>
          <h3>₹{user?.referralWallet ?? 0}</h3>
        </div>

        <p className="ref-count">
          {currentReferrals} / {totalReferrals} Referrals
        </p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percentage}%` }}>
            {Math.floor(percentage)}%
          </div>
        </div>

        <div className="dark-card">
          <div className="image-container">
            <img src="/phone.png" alt="phone" />
          </div>

          <p>
            📱 Refer 1000 Users <br />
            Win ₹5000 + iPhone 17 Pro Max
          </p>
        </div>

        <button className="start-btn" onClick={handleStart}>
          Start Referring Now
        </button>
      </div>
    </div>
  );
}
