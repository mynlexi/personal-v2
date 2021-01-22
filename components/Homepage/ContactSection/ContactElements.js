import styled from 'styled-components'

export const CSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 100px 0px;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

`

export const Cbutton = styled.button`
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