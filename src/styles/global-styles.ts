
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({theme}) => theme.colors.background};
  }

  h1, h2, li, p, a {
    color: ${({theme}) => theme.colors.text};
  }

`;

export const Title = styled.h1`
  ${({theme} )=> css`
    font-size: ${theme.font.sizes.xLarge};
    line-height: ${theme.font.sizes.xLarge};
    margin: ${theme.spacings.xLarge} 0;

    &::after {
      content: '';
      display: block;
      width: 30px;
      height: 5px;
      margin-top: 5px;
      background: ${theme.colors.text};
      border-radius: 3px;
    }
  `}
`;

export const Button = styled.button`
    ${({theme}) => css`
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.bold};
      letter-spacing: 1px;
      border: 2px solid ${theme.colors.secundary};
      border-radius: 3px;
      padding: ${theme.spacings.small} ${theme.spacings.large};
      margin-top: ${theme.spacings.large};
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover{
        animation: moveUp 0.2s forwards;
        box-shadow: ${theme.box.shadow};
      }
  `}

  @keyframes moveUp {
    from { transform: translateY(0); }
    to { transform: translateY(-5px); }
  }

`;



