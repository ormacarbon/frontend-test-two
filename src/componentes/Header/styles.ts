import styled from "styled-components";


export const HeaderContainer = styled.header`
  padding: 2rem 0;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: auto;
  }
  @media (max-width: 992px){
    padding: 2rem 2rem;
  }
` 


export const ToggleTheme = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.gray800};
  border-radius: 8px;

  @media (max-width: 992px){
    bottom: 1rem;
  }
  svg {
    color: ${({theme}) => theme.colors.white};
  }
`