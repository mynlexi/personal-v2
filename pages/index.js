import React, {useState} from 'react'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/Homepage/HeroSection'
import {MainContainer} from '../components/MainElements'
import AboutSection from '../components/Homepage/AboutSection'
import ProjectSection from '../components/Homepage/ProjectSection'
import ContactSection from '../components/Homepage/ContactSection'
import Footer from '../components/Footer'
import Email from '../components/Footer/Email'
import Social from '../components/Footer/Social'



export default function Home() {

  return (
          <div>
          <Sidebar />
          <Navbar />
          <Email />
          <Social />
          <MainContainer id="content">
          
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
      
           
          </MainContainer>
          <Footer />

     </div>
  )
}
