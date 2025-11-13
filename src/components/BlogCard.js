import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      <h2>{blog.title}</h2>
      <p className="category">#{blog.category}</p>
      <p>
        {showFull ? blog.content : `${blog.content.slice(0, 100)}...`}
      </p>
      <button className="read-btn" onClick={() => setShowFull(!showFull)}>
        {showFull ? "Show Less" : "Read More"}
      </button>
      <p className="date">{blog.date}</p>
    </motion.div>
  );
}
