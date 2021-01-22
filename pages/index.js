import React, {useState} from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/Homepage/HeroSection'
import {MainContainer} from '../components/MainElements'
import AboutSection from '../components/Homepage/AboutSection'
import ProjectSection from '../components/Homepage/ProjectSection'
import ContactSection from '../components/Homepage/ContactSection'



export default function Home({myLoader}) {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  

  return (
          <div>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <MainContainer id="content">
          
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
      
           
          </MainContainer>
     </div>
  )
}
