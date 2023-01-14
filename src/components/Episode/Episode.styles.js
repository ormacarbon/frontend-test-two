import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    background-color: ${theme.colors.episode.background};
    border-radius: 5px;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: opacity 0.3s;
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  `}
`;
