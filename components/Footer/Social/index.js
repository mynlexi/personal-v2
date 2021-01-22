import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import { socialMedia } from '../../../config';
import Side from '../Side_Footer'
import { IconGitHub, IconLinkedin } from '../../Icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }  
    &:hover {
          transform: translateY(-3px);
          color: var(--green);
        }
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
        
      }
      svg {
        width: 20px;
        height: 20px;
      
      }
    }
  }
`;

const Social = () => (
  <Side orientation="left">
    <StyledSocialList>
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
    </StyledSocialList>
  </Side>
);


export default Social;