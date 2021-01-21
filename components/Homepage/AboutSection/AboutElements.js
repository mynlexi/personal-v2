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
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--green);
      font-size: var(--fz-sm);
      line-height: 12px;
    }
  }
`


export const AboutImgBlock = styled.div`
position: relative;
max-width: 300px;
@media (max-width: 768px) {
  margin: 50px auto 0;
  width: 70%;
}
.wrapper {
  display: block;
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--green);
  &:hover,
  &:focus {
    background: transparent;
    outline: 0;
    &:after {
      top: 15px;
      left: 15px;
    }
    .img {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  .img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  &:before {
    top: 0;
    left: 0;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }


`