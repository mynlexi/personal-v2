import React from 'react'
import {PSection} from './ProjectElements'
import LargeProject from './LargeProject'
import { ProjectObjOne } from './Data'

const ProjectSection = () => {
  return (
    <PSection id="projects">
      <h2>
      Some Things I’ve Built
      </h2>

      <LargeProject {...ProjectObjOne} />
    </PSection>
  )
}

export default ProjectSection
