import styled from "styled-components";

export const SwitchContainer = styled.span`
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;
