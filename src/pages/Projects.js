import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="detail-page">
      <h2>💡 Project Ideas for Students</h2>
      <img src="/images/b3.jpeg" alt="Projects" className="detail-image" />
      <p>
        Projects are the best way to turn theory into practice. Start with something small like a portfolio website or a
        to-do list app. Once comfortable, move on to more challenging projects such as weather apps, blogs, or e-commerce websites.
        <br/><br/>
        Team projects help build collaboration and leadership skills. Document your process — it adds immense value to your resume.
        Participate in hackathons or online competitions to test your creativity under pressure.
        <br/><br/>
        Every project you complete adds confidence and experience. Keep innovating, experimenting, and learning!
      </p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
}
