import styled, {css} from "styled-components";

export const Header = styled.header`
  ${({theme}) => css`
      background: ${theme.colors.primary};
  `}
`;

export const Content = styled.div`
  ${({theme}) => css`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${theme.content.size.large};
    padding: ${theme.spacings.medium};
  `}

  svg {
    max-width: 50px;
    max-height: 50px;
    fill: ${({theme}) => theme.colors.text};
  }

  nav a {
    font-weight: ${({theme}) => theme.font.weight.semiBold};
    margin-left: ${({theme}) => theme.spacings.medium};
    position: relative;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    };

    &::after {
      content: '';
      left: 0;
      bottom: 0;
      position: absolute;
      width: 0%;
      height: 2px;
      background: ${({theme}) => theme.colors.text};
      border-radius: 3px;
      border: none;
      transition: all 0.2s ease-in-out;
    };

    &:hover::after {
      width: 100%;
      transition: all 0.2s ease-in-out;
    };
  }

  div {
    display: flex;
  }

`;
