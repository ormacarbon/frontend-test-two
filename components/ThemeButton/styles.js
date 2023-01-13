import styled from "styled-components";

export const Button = styled.label`
  cursor: pointer;
  display: block;
  padding: 2rem 2.5rem;
  height: 1.5rem;
  height: 1.5rem;
  &:hover,
  &:focus {
    background-color: var(--blue-100);
  }
  & > input {
    display: none;
  }
`;
