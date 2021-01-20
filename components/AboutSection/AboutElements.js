import styled from 'styled-components'

export const AboutSectionWrapper = styled.section`
  max-width: 900px;
  margin: 0px auto;
  padding: 100px 0px;
`

export const AboutH2 = styled.h2`
  font-weight: 600;
  color: var(--lightest-slate);
  line-height: 1.1;
`

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const AboutTextBlock = styled.div`

`

export const AboutP = styled.p`
  margin: 0px 0px 15px;
`

export const AboutSkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`

export const AboutLi = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`

export const AboutImgBlock = styled.div`
  position: relative;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    margin: 50px auto 0px;
    width: 70%;
  }  
`

export const AboutWrapper = styled.div`
  ox-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--green);
`