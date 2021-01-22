import React from 'react'
import {StyledSideElement} from './SideElements'

const Side = ({children, orientation}) => {
  return (
    <StyledSideElement orientation={orientation}>
      {children}      
    </StyledSideElement>
  )
}

export default Side
