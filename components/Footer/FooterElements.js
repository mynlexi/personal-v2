import styled from 'styled-components'

export const StyledFooter = styled.footer`    
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export const StyledSocialLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 50px; //make larger for more icons
    margin: 0 auto 10px;
    color: var(--light-slate);
  }
  ul {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        color: var(--green)
      }
    }
  }
`;

export const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
    &:hover {
      color: var(--green)
    }
  }
  .github-stats {
    margin-top: 10px;
    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;
