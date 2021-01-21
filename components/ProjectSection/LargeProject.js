import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {ProjectContent, ProjectGrid, ProjectDescription, ProjectOverline, ProjectTitle, ProjectImage, ProjectTechList, ProjectImageA, ProjectLi, ProjectLinks } from './ProjectElements'

const LargeProject = ({id, title, description, techlist, github_link, project_link, img, alt}) => {
  
  return (
    <ProjectGrid id={id}>
      <ProjectContent>
        <ProjectOverline>
          Featured Project
        </ProjectOverline>
        <ProjectTitle>
          {title}
        </ProjectTitle>
        <ProjectDescription>
          <p>
          {description}
          </p>

        </ProjectDescription>
        <ProjectTechList>
          {techlist.map((item, index)=>{
            return(
            <ProjectLi key={index}>{item}</ProjectLi>
            )
          })}

        </ProjectTechList>
        <ProjectLinks>
          <Link href={github_link}>
          <a>SVG</a>
          </Link>
          <Link href={project_link}>
          <a>SVG</a>
          </Link>
          {/* if one of the link is missing dont display icon? */}
        </ProjectLinks>

      </ProjectContent>
      <ProjectImage>
        <Link href={project_link}>
        <ProjectImageA>
          <div>
            <div></div>
            <Image
            src={img}
            alt={alt}
            layout="fill"
            />

          </div>
        </ProjectImageA>
        </Link>

      </ProjectImage>
      
    </ProjectGrid>
  )
}

export default LargeProject

// maybe make two, dependend on the index, they switch which styling?