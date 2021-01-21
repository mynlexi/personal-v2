import React from 'react'
import { LibrarySection, LibH2, LibraryGrid, LibA, LibButton, ProjectCard, CardInner,ProjectTop, ProjectLibraryLinks, CardTitle, CardDescription, ProjectTechstack } from './ProjectElements'
import {LibraryObj} from './Data'
import Link from 'next/link'

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
            <CardInner>
              <header>
                <ProjectTop>
                  {/* <div className="folder">
              get feather icon
                  </div> */}
                  <ProjectLibraryLinks>
                    {github && (
                      <Link href={github}>
                      <a aria-label="GitHub Link">
                      {/* <Icon name="GitHub" /> */}
                    </a>
                    </Link>
                    )}
                    { external && (
                      <Link href={external}>
                      <a>
                        link
                      </a>
                      </Link>
                    )
                    }
                  </ProjectLibraryLinks>
                  <CardTitle>
                    {title}
                  </CardTitle>
                  <CardDescription>
                    <p>{description}</p>
                  </CardDescription>


                </ProjectTop>

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
