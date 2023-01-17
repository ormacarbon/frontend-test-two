import styled, { css } from "styled-components";

export const Container = styled.button`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  padding: 0 14px;
  height: 32px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.button.text};
  background-color: ${(p) => p.theme.colors.button.bg};

  border-radius: ${(buttonProps) =>
    buttonProps.type === "rounded"
      ? "100px"
      : buttonProps.type === "rounded-square"
      ? "6px"
      : 0};

  svg {
    width: 16px;
    height: 16px;
  }

  :hover {
    background-color: ${(p) => p.theme.colors.button.hoverBg};
  }

  :active {
    background-color: ${(p) => p.theme.colors.button.bg};
  }

  ${(buttonProps) =>
    buttonProps.primary &&
    css`
      color: #ffffff;
      background-color: ${(p) => p.theme.colors.blue[200]};
      :hover {
        background-color ${(p) => p.theme.colors.blue[300]}
      }
      :active {
        background-color ${(p) => p.theme.colors.blue[100]}
      }
    `}
`;
