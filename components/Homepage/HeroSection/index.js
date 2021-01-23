import React from 'react'
import {HeroContainer, Herop1, HeroH2, HeroH3, Herop2, HeroButton} from './HeroElements'
import {email}  from '../../../config'

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <Herop1>
      Hi, my name is
      </Herop1>
      <HeroH2>
      Lorenz Westner.
      </HeroH2>
      <HeroH3>
      I build things for the web and beyond.
      </HeroH3>
      <Herop2>
      I'm a fullstack developer specializing in building exceptional websites and more.
      </Herop2>
      <HeroButton href={`mailto:${email}`} className="email-link">
        Get In Touch
      </HeroButton>

      
    </HeroContainer>
  )
}

export default HeroSection
