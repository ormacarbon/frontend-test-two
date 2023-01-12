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
  svg {
    color: ${(props) => props.theme.color};
  }
`