import styled, { css } from "styled-components";

const FixedHeader = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Container = styled.header`
  ${({ theme, isFixed }) => css`
    width: 100%;
    padding: 1rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.headerColor};

    ${isFixed && FixedHeader}
  `}
`;
