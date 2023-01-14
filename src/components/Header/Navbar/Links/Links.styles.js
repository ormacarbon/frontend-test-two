import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  gap: 7px;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
