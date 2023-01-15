import styled, {css} from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({theme}) => theme.spacings.xLarge};
`;

export const Button = styled.button`
  ${({theme}) => css`
    display: inline-block;
    padding: ${theme.spacings.medium};
    margin-right: ${theme.spacings.medium};
    border-radius: ${theme.box.radius};
    background: ${theme.colors.background};
    border: 2px solid ${theme.colors.secundary};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes.medium};
    cursor: pointer;

    &:active,
    &:hover {
      color: ${theme.colors.background};
      background: ${theme.colors.secundary};
      transition: .1s all ease-in-out;
    }
  `}
`
