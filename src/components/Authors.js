import React from "react";
import "../App.css";

export default function Authors() {
  const authors = [
    { name: "Priya", bio: "Tech & Education Enthusiast", img: "/images/author1.jpeg" },
    { name: "Rohan", bio: "Lifestyle & Productivity Writer", img: "/images/author2.jpeg" },
    { name: "Aditi", bio: "Student Life Blogger", img: "/images/author3.jpeg" },
  ];

  return (
    <section className="authors-section">
      <h2>Our Contributors</h2>
      <div className="author-cards">
        {authors.map((author) => (
          <div className="author-card" key={author.name}>
            <img src={author.img} alt={author.name} />
            <h3>{author.name}</h3>
            <p>{author.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
