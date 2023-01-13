import styled from "styled-components";

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`

export const HeaderLogoText = styled.span`
  margin-left: 1rem;
  letter-spacing: 2px;
  font-size: 1.5rem;
  color: #457b9d;
`

export const HeaderLogo = styled.img`
    width: 2.5rem;
    height: 2.5rem;
  `

export const HeaderSearchInputContainer = styled.div`
    position: relative;
    width: 100%
  `

  export const HeaderSearchInput = styled.input`
  background-color: hsla(0, 0%, 100%, .25);
  border: none;
  border-radius: 18px;
  padding: 0.375rem 2rem 0.375rem 0.75rem;
  color: white;
  min-width:  130px; 
  margin-left:  1rem;
  margin-top:  0;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: unset;
    width: 100%;
  }

  
`