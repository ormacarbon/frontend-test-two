import styled from "styled-components";


export const ToggleTheme = styled.button`
position: fixed;
bottom: 1rem;
right: 1rem;
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
svg {
  color: ${({theme}) => theme.colors.white};
}
`