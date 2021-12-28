import React, {useState, useEffect} from 'react'

import { StyledHeader, StyledNav, StyledLinks} from './NavbarElements'
import { Link as LinkScroll } from 'react-scroll'
import { navLinks } from '../../config'
import Link from 'next/link'
import { useScrollDirection } from '../Hooks/index';
import Menu from '../Sidebar'



const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <div className="logo" tabIndex="-1">
          {isHome ? ( <LinkScroll to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'>
                        <a href="/" aria-label="home">
                          &gt; mynlexi
                        </a></LinkScroll>
                    ) : (
                    <Link href="/" aria-label="home">
                      <a>
                        &gt; torrel.eth
                      </a>
                    </Link>
          )}
        </div>

        <StyledLinks>
          <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <LinkScroll to={url}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
                {name}
              </LinkScroll>
            </li>
            ))}
          </ol>
          <div>
            <a
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </StyledLinks>
        <Menu />            
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;


// function Navbar({ toggle }) {

//   const [scrollNav, setScrollNav] = useState(false)

//   const changeNav = () => {
//     if (window.scrollY >= 80) {
//       setScrollNav(true)
//     } else {
//       setScrollNav(false)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', changeNav)
//   }, [])

//   const toggleHome = () => {
//     scroll.scrollToTop();
//   }

//   return (
//     <>
//     <Nav scrollNav={scrollNav}>
//       <NavbarContainer>
//         <NavLogo to="/" onClick={toggleHome}>
//           mynlexi
//         </NavLogo>
//         <MobileIcon onClick={toggle}>
//           <FaBars />
//         </MobileIcon>
//         <NavMenu>
//           <NavItem>
//             <NavLinks 
//             to="about" 
//             smooth={true}
//             duration={500}
//             spy={true}
//             exact='true'
//             offset={-80}
//             >About</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks 
//             to="projects"
//              smooth={true}
//              duration={500}
//              spy={true}
//              exact='true'
//              offset={-80}>Projects</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks 
//             to="contact"
//              smooth={true}
//              duration={500}
//              spy={true}
//              exact='true'
//              offset={-80}
//              >Contact</NavLinks>
//           </NavItem>
     
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink 
//           to="/signin"
//            smooth={true}
//            duration={500}
//            spy={true}
//            exact='true'
//            offset={-80}
//           >Resume</NavBtnLink>
//         </NavBtn>
//       </NavbarContainer>
//     </Nav>
//     </>

//   );
// }

// export default Navbar
