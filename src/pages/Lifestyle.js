import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Lifestyle() {
  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <h2>🌞 Lifestyle Hacks for Students</h2>
      <img src="/images/b4.jpeg" alt="Lifestyle" className="detail-image" />
      <p>
        A healthy lifestyle boosts both productivity and happiness. Begin your day early with exercise and meditation.  
        Eat nutritious meals and stay hydrated throughout the day. Manage screen time wisely and take regular eye breaks.
        <br/><br/>
        Prioritize sleep — 7 to 8 hours is essential for memory and focus.  
        Keep your surroundings tidy, and create a dedicated study area to train your brain for learning.
        <br/><br/>
        Practice gratitude and spend time doing what you love. A positive lifestyle is built through small daily choices — 
        stay active, eat well, and cherish your mental peace.
      </p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
}
