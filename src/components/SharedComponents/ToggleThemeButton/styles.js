import styled from "styled-components";

export const Container = styled.button`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background-color: transparent;
  border-radius: 6px;

  svg {
    transition: all 0.3s ease;
    color: ${(p) => p.theme.colors.button.text};
    width: 20px;
    height: 20px;
  }

  :hover {
    svg {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;
