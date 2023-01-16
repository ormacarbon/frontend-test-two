import styled from "styled-components";

export const Button = styled.button`
  padding: 1em 1.5em;
  border: ${({ theme }) => (theme === "ghost" ? "1px solid #000000" : "none")};
  border-radius: 8px;
  font-size: ${({ size }) =>
    size === "small" ? "0.7rem" : size === "big" ? "1.2rem" : "1rem"};
  font-weight: 600;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  background-color: ${({ theme }) =>
    theme === "ghost"
      ? "#fff"
      : theme === "success"
      ? "#00ff00"
      : theme === "danger"
      ? "#e97777"
      : "#1e90ff"};
  color: ${({ theme }) => (theme === "ghost" ? "#000000" : "#fff")};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => (theme === "ghost" ? "#000000" : "#ffffff")};
  }
`;
