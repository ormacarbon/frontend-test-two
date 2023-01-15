import styled, {css} from "styled-components";

export const Footer = styled.footer`
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `}

  p {
    text-align: center;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacings.large};
    font-weight: ${({theme}) => theme.font.weight.semiBold};
    letter-spacing: 1px;
  }
`;
