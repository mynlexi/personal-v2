import styled from "styled-components";


export const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `120%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
    menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

export const StyledSidebar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
    a {
      display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    width: 100%;
    padding: 3px 20px 20px;
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
      
    }
  }
  .resume-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

// import styled from 'styled-components'
// import {FaTimes} from 'react-icons/fa'
// import {Link as LinkScroll } from 'react-scroll'

// export const SidebarContainer = styled.aside`
//   position: fixed;
//   z-index: 999;
//   width: 100%;
//   height: 100%;
//   background: #0d0d0d;
//   display: grid; 
//   align-items: center;
//   top: 0;
//   left: 0;
//   transition: 0.3s ease-in-out;
//   opacity: ${({isOpen}) =>(isOpen ? '100%' : '0')};
//   top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

// `

// export const CloseIcon = styled(FaTimes)`
//   color: #fff
// `

// export const Icon = styled.div`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.5rem;
//   background: transparent;
//   font-size: 2rem;
//   cursor: pointer;
//   outline: none;
// `

// export const SidebarWrapper = styled.div`
//   color: #fff;
// `

// export const SidebarLink = styled(LinkScroll)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.5rem;
//   text-decoration: none;
//   list-style: none;
//   transition: 0.2s ease-in-out;
//   text-decoration: none;
//   color: #fff;
//   curosr: pointer;

//   &:hover {
//     color: #01bf71;
//     transition: 0.2s ease-in-out;
//   }
// `

// export const SideBtnWrap = styled.div`
//   display: flex;
//   justify-content: center;

// `

// export const SidebarRoute = styled.div`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 16px 64px;
//   color #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;

//   }
// `
// export const SidebarMenu = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(6, 80px);
//   text-align: center;
//   padding-left: 0;
  

//   @media screen and (max-width: 480px){
//     grid-template-rows: repeat(6, 60px);
//   }

// `

