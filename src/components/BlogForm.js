import React, { useState } from "react";

export default function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
      image: `/images/b${Math.floor(Math.random() * 4) + 1}.jpeg`,
    };
    addBlog(newBlog);
    setTitle("");
    setContent("");
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>✍️ Add New Blog</h2>
      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter short content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Study</option>
        <option>Motivation</option>
        <option>Projects</option>
        <option>Lifestyle</option>
      </select>
      <button type="submit">Add Blog</button>
    </form>
  );
}
