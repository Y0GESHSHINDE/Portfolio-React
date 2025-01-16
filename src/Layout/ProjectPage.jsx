import React from 'react'
import Navbar from '../components/Navbar'
import AllProjectSection from '../components/AllProjectSection'
import Footer from '../components/Footer'

function ProjectPage() {
  return (
    <>
    <div className='pb-40 bg-[#edf2f4]'>
    <Navbar/>
    <AllProjectSection/>
    </div>
    <Footer/>
    </>
  )
}

export default ProjectPage