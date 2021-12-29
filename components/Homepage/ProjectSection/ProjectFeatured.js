import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {ProjectContent, ProjectGrid, ProjectDescription, ProjectOverline, ProjectTitle, ProjectImage, ProjectTechList, ProjectImageA, ProjectLi, ProjectLinks, ProjectImgStylediv } from './ProjectElements'
import {LeftProjectContent, LeftProjectGrid, LeftProjectImage, LeftProjectTechList, LeftProjectLinks} from './ProjectFeature_Left'
import IconGitHub from '../../Icons/github'
import IconExternal from '../../Icons/external'
import {fleekloader} from "../../utils/imageloader";



  const LargeProject = ({id, right_text, title, description, techlist, github_link, project_link, img, alt}) => {
  console.log(typeof fleekloader, "hallo")
  return (
    <>
    {right_text ? 
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
          { github_link && <Link href={github_link}>
          <a target="_blank" rel="noopener"><IconGitHub /></a>
          </Link>}
          
          <Link href={project_link}>
          <a target="_blank" rel="noopener" ><IconExternal /></a>
          </Link>
        </ProjectLinks>

      </ProjectContent>
      <ProjectImage>
        <Link href={project_link}>
          <a target="_blank" rel="noopener">
            <div className="img">
              <div></div>
              <Image loader={()=>fleekloader({src: img[0], width: img[1] })}
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
      
    </ProjectGrid>:
     
     <LeftProjectGrid>
       <LeftProjectContent>
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
        <LeftProjectTechList>
          {techlist.map((item, index)=>{
            return(
            <ProjectLi key={index}>{item}</ProjectLi>
            )
          })}

        </LeftProjectTechList>
        <LeftProjectLinks>
          { github_link && <Link href={github_link}>
          <a target="_blank" rel="noopener"><IconGitHub /></a>
          </Link>}
          
          <Link href={project_link}>
          <a target="_blank" rel="noopener" ><IconExternal /></a>
          </Link>
        </LeftProjectLinks>
       </LeftProjectContent>
       <LeftProjectImage>
        <Link href={project_link}>
            <a target="_blank" rel="noopener">
              <div className="img">
                <div></div>
                <Image
                    loader={()=>fleekloader({src: img[0], width: img[1] })}
                src={img[0]}
                alt={alt}
                width={img[1]}
                height={img[2]}
                layout="responsive"
                />

              </div>
            </a>
          </Link>
       </LeftProjectImage>
       </LeftProjectGrid>}
    </>
  )
}

export default LargeProject

// maybe make two, dependend on the index, they switch which styling?