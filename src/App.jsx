// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Services from "./pages/Services/Services";
import Empty from "./pages/Contact/Empty";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

function App() {
  // Initialize AOS when the component mounts
  AOS.init({
    duration: 1000, // Animation duration
    easing: "ease-in-out", // Animation easing
    once: false, // Whether animation should happen only once
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Empty />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
