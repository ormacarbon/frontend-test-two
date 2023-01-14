import styled from "styled-components";

export const Container = styled.article`
  max-width: 16.875rem; //280px
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    img {
      opacity: 0.6;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;
