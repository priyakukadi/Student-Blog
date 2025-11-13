import React from "react";
import BlogForm from "../components/BlogForm";
import Authors from "../components/Authors";
import "../App.css";

export default function Home({ blogs, setBlogs }) {
  const addBlog = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1>📝 Welcome to Priya’s Student Blog</h1>
          <p>Share your stories, ideas, and projects with fellow students!</p>
        </div>
        <img src="/images/hero.png" alt="Hero" className="hero-img" />
      </section>

      <section className="write-blog">
        <BlogForm addBlog={addBlog} />
      </section>

      <Authors />
    </div>
  );
}
