import React from 'react'
import Image from 'next/image'
import {AboutSectionWrapper, AboutH2, AboutImgBlock, AboutInner, AboutLi, AboutP, AboutSkillList, AboutTextBlock, AboutWrapper} from './AboutElements'
import Link from "next/link"

const AboutSection = (myLoader) => {
  return (
    <AboutSectionWrapper id="about">
      <AboutH2 className="numbered-heading">
        About Me
      </AboutH2>
      <AboutInner>
        <AboutTextBlock>
          <AboutP>
          Hello! I'm Lorenz, currently based in Germany. 
          </AboutP>
          <AboutP>
          I immensely enjoy building things, and making them run as fast as possible.
          </AboutP>
          <AboutP>
          After receiving my MSc. in Finance I decided to pursue a career as Software Engineer.
          </AboutP>
          <AboutP>
          Now I work for <Link href={"https://getvoiceline.com/"}><a>VoiceLine</a></Link> as a Junior Fullstack Engineer.
          </AboutP>
          <AboutSkillList>
            <li>
              TypeScript/JavaScript
            </li>  <li>
            Golang
          </li> <li>
            Chromium Extension
          </li>
            <li>
            Next.js
            </li>

            <li>
            React
            </li>

            <li>
            HTML & (S)CSS
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
