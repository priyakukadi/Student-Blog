import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs-page">
      <h2>📚 All Blog Posts</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3>{blog.title}</h3>
            <p>{blog.content.slice(0, 100)}...</p>
            {blog.category === "Study" && <Link to="/study" className="read-btn">Read More</Link>}
            {blog.category === "Motivation" && <Link to="/motivation" className="read-btn">Read More</Link>}
            {blog.category === "Projects" && <Link to="/projects" className="read-btn">Read More</Link>}
            {blog.category === "Lifestyle" && <Link to="/lifestyle" className="read-btn">Read More</Link>}
          </div>
        ))}
      </div>
    </div>
  );
}
