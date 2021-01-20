import styled from 'styled-components'

export const Psection = styled.section`
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

  media (min-width: 768px) {
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

export const ProjectLi = styöed.li`
  argin: 0px 20px 5px 0px;
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
`

export const ProjectImage = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  grid-column: 1 / 8;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`

export const ProjectImageA = styled.a`
  width: 100%;
  background-color: var(--green);
  border-radius: var(--border-radius);
  vertical-align: middle;
`

