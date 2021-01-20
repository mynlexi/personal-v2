import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LargeProject = () => {
  return (
    <ProjectGrid>
      <ProjectContent>
        <ProjectOverline>
          Featured Project
        </ProjectOverline>
        <ProjectTitle>
          {title}
        </ProjectTitle>
        <ProjectDescription>
          <p>
          
          </p>

        </ProjectDescription>
        <ProjectTechList>
          {techlist.map(()=>{
            <ProjectLi key={index}>{item}</ProjectLi>
          })}

        </ProjectTechList>
        <ProjectLinks>
          <Link href="https://github.com">
          <a>SVG</a>
          </Link>
          <Link href="https://github.com">
          <a>SVG</a>
          </Link>
          {/* if one of the link is missing dont display icon? */}
        </ProjectLinks>

      </ProjectContent>
      <ProjectImage>
        <Link>
        <ProjectImageA>
          <div>
            <div></div>
            <Image
            src={img}
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