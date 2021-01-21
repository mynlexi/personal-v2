import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {ProjectContent, ProjectGrid, ProjectDescription, ProjectOverline, ProjectTitle, ProjectImage, ProjectTechList, ProjectImageA, ProjectLi, ProjectLinks, ProjectImgStylediv } from './ProjectElements'
import IconGitHub from '../../Icons/github'
import IconExternal from '../../Icons/external'


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
          <a ><IconGitHub /></a>
          </Link>
          <Link href={project_link}>
          <a><IconExternal /></a>
          </Link>
          {/* if one of the link is missing dont display icon? */}
        </ProjectLinks>

      </ProjectContent>
      <ProjectImage>
        <Link href={project_link}>
          <a>
            <div className="img">
              <div></div>
              <Image
              src={img[0]}
              alt={alt}
              width={img[1]}
              height={img[2]}
              layout="responsive"
              />

            </div>
          </a>
        </Link>

      </ProjectImage>
      
    </ProjectGrid>
  )
}

export default LargeProject

// maybe make two, dependend on the index, they switch which styling?