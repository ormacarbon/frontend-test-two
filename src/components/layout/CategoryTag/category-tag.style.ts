import styled from "styled-components";

export const TagContainer = styled.button`
  all: unset;
  height: 1.6rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background3};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;

export const TagName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
