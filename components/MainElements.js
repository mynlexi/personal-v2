import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 0px 150px;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;

  @media screen and (max-width: 1080px) {
    padding: 0px 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 25px;
  }
`