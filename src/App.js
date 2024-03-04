import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Projects/project";
import About from "./Pages/Home/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Home/Footer.jsx";
import NotFoundPage from "./Pages/Home/NotFoundPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
