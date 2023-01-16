import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 120px;
`;

export const Select = styled.button`
  cursor: pointer;
  display: flex;
  background-color: transparent;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  color: ${(p) => p.theme.colors.primary};
  border-radius: 4px;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
  }

  :hover {
    background-color: ${(p) => p.theme.colors.dropdown.bg};
  }
`;

export const Options = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: left;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.dropdown.bg};
  border-radius: 10px;
  position: absolute;
  left: ${(_p) => _p.margin + 10 + "px"};
  top: 0px;
  width: 100%;
  overflow: hidden;

  *:first-child {
    border-bottom: 1px solid ${(p) => p.theme.colors.dropdown.divider};
  }

  *:last-child {
    border-top: 1px solid ${(p) => p.theme.colors.dropdown.divider};
  }
`;

export const Option = styled.span`
  transition: all 0.3s ease;
  background: transparent;
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.dropdown.text};
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  ${(optionProps) =>
    optionProps.selected &&
    css`
      display: none;
    `}

  :hover {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

export const Background = styled.div`
  position: fixed;
  background: transparent;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
`;
