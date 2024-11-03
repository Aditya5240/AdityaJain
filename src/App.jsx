import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import ContactForm from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>
    </Router>
  );
};

export default App;
