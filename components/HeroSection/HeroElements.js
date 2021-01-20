import styled from 'styled-components'

export const HeroContainer = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;

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
  color: #90DDF0;
  line-height: 0.9;
  
  font-size: clamp(40px, 8vw, 80px);

`

export const Herop2 = styled.p`
  margin: 20px 0px 0px;
  max-width: 500px;
`

export const HeroButton = styled.a`
  color: green;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  // font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.0355,1);
  margin-top: 50px;
`