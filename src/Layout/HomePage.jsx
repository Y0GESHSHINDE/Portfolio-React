import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import Experiences from '../components/Experiences'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function HomePage() {
  return (
    < >
    <Navbar/>    
    <HeroSection/>
    <AboutSection/>
    <Experiences/ >
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default HomePage