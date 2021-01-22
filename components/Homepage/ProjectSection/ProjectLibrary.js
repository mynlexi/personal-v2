import React from 'react'
import { StyledProjectsSection, StyledProject } from './ProjectElements'
import {LibraryObj} from './Data'
import Link from 'next/link'
import IconGitHub from '../../Icons/github'
import IconExternal from '../../Icons/external'
import IconFolder from'../../Icons/folder'


const ProjectLibrary = () => {

  return (
    <StyledProjectsSection>
      <h2>
      Other Noteworthy Projects
      </h2>
      {/* <Link href="">
        <LibA>
        view the archive
        </LibA>
      </Link> */}
      <div className="projects-grid">
        {LibraryObj.map(({github, external, title, description, techlist}, index)=>{
         
          return(
          <StyledProject key={index}>
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <IconFolder />
                  </div>
                  <div className="project-links">
                    {github && (
                      <Link href={github}>
                      <a aria-label="GitHub Link">
                      <IconGitHub />
                    </a>
                    </Link>
                    )}
                    { external && (
                      <Link href={external}>
                      <a>
                       <IconExternal />
                      </a>
                      </Link>
                    )
                    }  
                  </div>
                  </div >
                  <div className="project-title">
                    {title}
                  </div>
                  <div className="project-description">
                    <p>{description}</p>
                  </div >


              

              </header>
              <footer>
              <ul className="project-tech-list">
                {techlist.map((item, index)=>{
                  return(
                  <li key={index}>{item}</li>
                  )
                })}

                </ul>
              </footer>
            </div>
          </StyledProject>
          )}
        )}
      </div>
      <div className="more-button">
        Show More
        </div >

      
    </StyledProjectsSection>
  )
}

export default ProjectLibrary
