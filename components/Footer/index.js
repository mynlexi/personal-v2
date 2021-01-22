import React, { useState, useEffect } from 'react';
import { IconGitHub, IconLinkedin } from '../Icons';
import { socialMedia } from '../../config';
import Link from 'next/link'
import {StyledCredit, StyledFooter, StyledSocialLinks} from './FooterElements'


const Footer = () => {
  

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          
              <li >
                <Link href={socialMedia[0].url}>
                <a  aria-label={socialMedia[0].name} target="_blank">
                  <IconGitHub  />
                </a></Link>
              </li>
              <li >
                <Link href={socialMedia[1].url}>
                <a  aria-label={socialMedia[1].name} target="_blank">
                  <IconLinkedin />
                </a></Link>
              </li>
        
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
      
          <div> <Link href="https://github.com/mynlexi/personal-v2"><a target="_blank">Built</a></Link>by Lorenz Westner,<Link href="https://github.com/bchiang7/v4"><a target="_blank">Designed</a></Link>by Brittany Chiang</div>

        
      
      </StyledCredit>
    </StyledFooter>
  );
};
export default Footer;