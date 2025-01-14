import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Layout/HomePage";
import '../src/app.css'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
