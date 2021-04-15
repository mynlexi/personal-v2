import styled from 'styled-components'

export const LeftProjectGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
  
`
export const LeftProjectContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }
  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }

`
// export const LeftProjectOverline = styled.p`
//   margin: 10px 0;
//   color: var(--green);
//   font-family: var(--font-mono);
//   font-size: var(--fz-xs);
//   font-weight: 400;
// `

// export const LeftProjectTitle = styled.h3`
//   color: var(--lightest-slate);
//   font-size: clamp(24px, 5vw, 28px);

//   @media (min-width: 768px) {
//     margin: 0px 0px 20px;
//   }

//   @media (max-width: 768px) {
//     color: var(--white);
//   }
// `

// export const LeftProjectDescription = styled.div`
//   box-shadow: 0 10px 30px -15px var(--navy-shadow);
//   transition: var(--transition);
//   position: relative;
//   z-index: 2;
//   padding: 25px;
//   border-radius: var(--border-radius);
//   background-color: var(--light-navy);
//   color: var(--light-slate);
//   font-size: var(--fz-lg);

//   @media (max-width: 768px) {
//     padding: 20px 0px;
//     background-color: transparent;
//     box-shadow: none;
//   }

//   &:hover {
//     box-shadow: none;
//   }

// `
export const LeftProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  -webkit-box-pack: end;
  justify-content: flex-start;
`

// export const LeftProjectLi = styled.li`
//   margin: 0px 20px 5px 0px;
//   color: var(--light-slate);
//   font-family: var(--font-mono);
//   font-size: var(--fz-xs);
//   white-space: nowrap;
//   margin: 0px 0px 5px 20px;
  
// `

export const LeftProjectLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);
  -webkit-box-pack: end;
  justify-content: flex-start;
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

export const LeftProjectImage = styled.div`
  grid-column: 6 / -1;
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