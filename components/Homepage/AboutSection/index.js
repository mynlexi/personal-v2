import React from 'react'
import Image from 'next/image'
import {AboutSectionWrapper, AboutH2, AboutImgBlock, AboutInner, AboutLi, AboutP, AboutSkillList, AboutTextBlock, AboutWrapper} from './AboutElements'

const AboutSection = (myLoader) => {
  return (
    <AboutSectionWrapper id="about">
      <AboutH2 className="">
        About Me
      </AboutH2>
      <AboutInner>
        <AboutTextBlock>
          <AboutP>
          Hello! I'm Lorenz, currently based in Germany. 
          </AboutP>
          <AboutP>
          I immensly enjoy building things, and making them run as fast as possible.  
          </AboutP>
          <AboutP>
          After recieving my MSc. in Finance I decided to pursue a career as Full-stack Developer.
          </AboutP>
          <AboutP>
          Here are a few technologies I've been working with recently 
          </AboutP>
          <AboutSkillList>
            <li>
            JavaScript (ES6+)
            </li>
            <li>
            Next.js
            </li>
            <li>
            React
            </li>
            <li>
            Ruby on Rails
            </li>
            <li>
            HTML & (S)CSS
            </li>
            <li>
            Tailwind CSS
            </li>
          </AboutSkillList>
        </AboutTextBlock>
        <AboutImgBlock>
          <div className="wrapper">
              <Image
              src='/images/Profile-Square.jpg'
              width={350}
              height={350}
              layout="responsive"
              className="img"
              
              />
          </div>
        </AboutImgBlock>

      </AboutInner>
      
    </AboutSectionWrapper>
  )
}

export default AboutSection
