import styled from "styled-components";

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem 7rem 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--white-100);
  box-shadow: var(--shadow);
  transition: 0.2s;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: var(--shadow-hover);
  }
  &:placeholder {
    color: var(--black-100);
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
