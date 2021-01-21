import React, {useState} from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import {MainContainer} from '../components/MainElements'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'




export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
          <div>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <MainContainer>
          
            <HeroSection />
            <AboutSection />
            <ProjectSection />
           
          </MainContainer>
     </div>
  )
}
