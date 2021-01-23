import styled from 'styled-components'
import {bigButton} from '../../../styles/mixins'

export const HeroContainer = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
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

export const Herop1 = styled.h1`
  margin: 0px 0px 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(14px,5vw,16px);
  font-weight: 400;
  
`
export const HeroH2 = styled.h2`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
`

export const HeroH3 = styled.h3`
  margin: 0px; 
  margin-top: 10px;
  color: var(--light-slate)

  line-height: 0.9;
  
  font-size: clamp(40px, 8vw, 80px);

`

export const Herop2 = styled.p`
  margin: 20px 0px 0px;
  max-width: 500px;
`

export const HeroButton = styled.a`

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