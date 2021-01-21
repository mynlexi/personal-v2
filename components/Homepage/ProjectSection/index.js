import React from 'react'
import {PSection} from './ProjectElements'
import LargeProject from './ProjectFeatured'
import { ProjectObjOne } from './Data'
import ProjectLibrary from './ProjectLibrary'

const ProjectSection = () => {
  return (
    <PSection id="projects">
      <h2>
      Some Things I’ve Built
      </h2>

      <LargeProject {...ProjectObjOne} />
      <ProjectLibrary />
    </PSection>
  )
}

export default ProjectSection
