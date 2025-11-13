import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎓 Student Blog</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Show Blogs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
