import React from 'react'
import { LibrarySection, LibH2, LibraryGrid, LibA, LibButton, ProjectCard, CardInner,ProjectTop, ProjectLibraryLinks, CardTitle, CardDescription, ProjectTechstack } from './ProjectElements'
import {LibraryObj} from './Data'
import Link from 'next/link'
import IconGitHub from '../../Icons/github'
import IconExternal from '../../Icons/external'
import IconFolder from'../../Icons/folder'


const ProjectLibrary = () => {

  return (
    <LibrarySection>
      <LibH2>
      Other Noteworthy Projects
      </LibH2>
      {/* <Link href="">
        <LibA>
        view the archive
        </LibA>
      </Link> */}
      <LibraryGrid>
        {LibraryObj.map(({github, external, title, description, techlist}, index)=>{
         
          return(
          <ProjectCard key={index}>
            <CardInner className="project-inner">
              <header>
                <ProjectTop>
                  <div className="folder">
                    <IconFolder />
                  </div>
                  <ProjectLibraryLinks>
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
                  </ProjectLibraryLinks>
                  </ProjectTop>
                  <CardTitle>
                    {title}
                  </CardTitle>
                  <CardDescription>
                    <p>{description}</p>
                  </CardDescription>


              

              </header>
              <footer>
              <ProjectTechstack>
                {techlist.map((item, index)=>{
                  return(
                  <li key={index}>{item}</li>
                  )
                })}

                </ProjectTechstack>
              </footer>
            </CardInner>
          </ProjectCard>
          )}
        )}
      </LibraryGrid>
      <LibButton>
        Show More
        </LibButton>

      
    </LibrarySection>
  )
}

export default ProjectLibrary
