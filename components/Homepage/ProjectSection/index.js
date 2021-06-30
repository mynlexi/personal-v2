import React from 'react'
import {PSection} from './ProjectElements'
import LargeProject from './ProjectFeatured'
import { ProjectObjOne, ProjectObjTwo, ProjectObjThree } from './Data'
import ProjectLibrary from './ProjectLibrary'

const ProjectSection = () => {
  return (
    <PSection id="projects">
      <h2 className="numbered-heading">
      Some Things I’ve Built
      </h2>

      <LargeProject {...ProjectObjOne} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LargeProject {...ProjectObjTwo} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LargeProject {...ProjectObjThree} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectLibrary />
    </PSection>
  )
}

export default ProjectSection
