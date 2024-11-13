import React from 'react'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App