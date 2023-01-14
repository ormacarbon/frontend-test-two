import styled from "styled-components";

export const SwitchContainer = styled.span`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;
