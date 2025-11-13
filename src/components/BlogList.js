import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h3>{blog.title}</h3>
          <span className="category">{blog.category}</span>
          <span className="date">{blog.date}</span>
          <p>{blog.content.slice(0, 100)}...</p>
          <Link to={blog.link} className="read-more-btn">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
