import styled from 'styled-components'

export const PSection = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;

  @media (max-width: 768px) {
      padding: 80px 0px;
  }

  @media (max-width: 480px) {
    padding: 60px 0px;
}
`

export const ProjectGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
`
export const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  grid-column: 7 / -1;
  text-align: right;

  @media (max-width: 1080px) {
    grid-column: 5 / -1;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 25px 25px 20px;
  }


`
export const ProjectOverline = styled.p`
  margin: 10px 0px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`

export const ProjectTitle = styled.h3`
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);

  @media (min-width: 768px) {
    margin: 0px 0px 20px;
  }

  @media (max-width: 768px) {
    color: var(--white);
  }
`

export const ProjectDescription = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-lg);

  @media (max-width: 768px) {
    padding: 20px 0px;
    background-color: transparent;
    box-shadow: none;
  }

  &:hover {
    box-shadow: none;
  }

`
export const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  -webkit-box-pack: end;
  justify-content: flex-end;
`

export const ProjectLi = styled.li`
  margin: 0px 20px 5px 0px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  white-space: nowrap;
  margin: 0px 0px 5px 20px;
`

export const ProjectLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-left: 0px;
  margin-right: -10px;

  a {
    
    padding: 10px;
    &.external {
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }
    }
    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: var(--green)
    }
`

export const ProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }
  a {
    width: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;
    &:hover,
    &:focus {
      background: transparent;
      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }
  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(80%);
    }
  }
`;

export const LibrarySection = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LibH2 = styled.h2`
  font-size: clamp(24px,5vw,var(--fz-heading));
`

export const LibA = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  cursor: pointer;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  &:after {
    bottom: 0.1em;
  }
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`
export const ProjectCard = styled.div`
  cursor: default;
  transition: var(--transition);
  &:hover,
  &:focus {
    outline: 0;
    .project-inner {
      transform: translateY(-5px);
    }
  }
`

export const CardInner = styled.div`
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);
`

export const ProjectTop = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 35px;
  
  .folder {
    width: 40px;
    height: 40px;
    
    color: var(--green);
    svg {
      width: 40px;
      height: 40px;
  }
`

export const ProjectLibraryLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  color: var(--light-slate);
  a {
    padding: 5px 7px;
    &.external {
      svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }
    }
    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: var(--green)
    }
  }

`

export const CardTitle = styled.h3`
  margin: 0 0 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xxl);
`

export const CardDescription = styled.div`
  color: var(--light-slate);
  font-size: 17px;
`

export const ProjectTechstack = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.75;
    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`

export const LibButton = styled.button`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
  }
  &:after {
    display: none !important;
  }
  margin-top: 50px;
`