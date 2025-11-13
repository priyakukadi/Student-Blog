import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Study() {
  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <h2>📖 Study Tips & Techniques</h2>
      <img src="/images/b1.jpeg" alt="Study" className="detail-image" />
      <p>
        Studying effectively involves much more than just memorizing notes. Start by organizing your time wisely — 
        make a weekly schedule that includes short study sessions, regular breaks, and review periods. Try the Pomodoro 
        technique to stay focused for 25 minutes and rest for 5. Focus on understanding core ideas rather than rote learning.
        <br/><br/>
        Take handwritten notes — it improves retention. Discuss topics with friends or explain them aloud as if teaching someone else. 
        Keep your environment clean and distraction-free. Use visual aids like mind maps and flashcards for complex topics.
        <br/><br/>
        Most importantly, stay consistent. Regular revision, proper rest, and a balanced routine lead to the best results. 
        Keep learning, stay curious, and enjoy the process of growth!
      </p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
}
