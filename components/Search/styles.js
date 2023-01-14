import styled from "styled-components";

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem 7rem 1rem 2rem;
  color: ${(props) => props.theme.colors.textSecundary};
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.container};
  box-shadow: ${(props) => props.theme.colors.shadow};
  transition: 0.2s;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: ${(props) => props.theme.colors.shadowHover};
  }
  &::placeholder {
    color: currentColor;
  }
`;

export const Button = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 0.5rem;
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0 2rem;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: var(--blue-100);
  }
`;
