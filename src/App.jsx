import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Layout/HomePage";
import AboutPage from "./Layout/AboutPage";
import SkillPage from "./Layout/SkillPage";
import ExperiencesPage from "./Layout/ExperiencesPage";
import ProjectPage from './Layout/ProjectPage';
import ContactPage from "./Layout/ContactPage";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/skills" element={<SkillPage/>} />
      <Route path="/experiences" element={<ExperiencesPage/>} />
      <Route path="/project" element={<ProjectPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
