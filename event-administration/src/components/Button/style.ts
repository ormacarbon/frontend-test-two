import styled from "styled-components";

export const Button = styled.button`
  font-family: var(--roboto);
  font-weight: 300;
  border-radius: 5px;

  background-color: var(--brown-300);
  color: var(--white-999);
  width: 150px;
  height: 30px;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-out;
  }
`;
