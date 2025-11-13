import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Study from "./pages/Study";
import Motivation from "./pages/Motivation";
import Projects from "./pages/Projects";
import Lifestyle from "./pages/Lifestyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const initialBlogs = [
    {
      id: 1,
      title: "Study Tips",
      content:
        "Here are some study tips for students. Organize your time, take short breaks, and focus on understanding concepts rather than memorizing.",
      category: "Study",
      date: new Date().toLocaleDateString(),
      image: "/images/b1.jpeg",
    },
    {
      id: 2,
      title: "Motivational Thoughts",
      content:
        "Stay motivated with daily affirmations and set achievable goals. Motivation comes from small consistent actions every day.",
      category: "Motivation",
      date: new Date().toLocaleDateString(),
      image: "/images/b2.jpeg",
    },
    {
      id: 3,
      title: "Project Ideas",
      content:
        "Explore exciting project ideas for your portfolio. From coding apps to creative designs, these ideas will enhance your skills.",
      category: "Projects",
      date: new Date().toLocaleDateString(),
      image: "/images/b3.jpeg",
    },
    {
      id: 4,
      title: "Lifestyle Hacks",
      content:
        "Improve your daily routine with simple lifestyle hacks. Better sleep, exercise, and time management can make a huge difference.",
      category: "Lifestyle",
      date: new Date().toLocaleDateString(),
      image: "/images/b4.jpeg",
    },
  ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || initialBlogs;
    setBlogs(storedBlogs);
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/study" element={<Study />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
