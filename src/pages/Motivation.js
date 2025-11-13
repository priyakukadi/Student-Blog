import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Motivation() {
  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <h2>🔥 Motivation for Students</h2>
      <img src="/images/b2.jpeg" alt="Motivation" className="detail-image" />
      <p>
        Motivation is the fuel that keeps us going even when challenges appear. It’s normal to lose focus sometimes, but
        setting small, clear goals can help you regain momentum. Write down your daily goals and check them off to feel accomplished.
        <br/><br/>
        Surround yourself with positivity — read success stories, listen to motivational podcasts, or talk to inspiring friends.  
        Every small effort counts. Remember, consistency beats intensity.
        <br/><br/>
        Celebrate progress, not perfection. Focus on how far you’ve come instead of how far you need to go.  
        Believe in your potential — you have everything it takes to achieve greatness.
      </p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
}
