import Link from "next/link";
import styled from "styled-components";

export const TagContainer = styled(Link)`
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
  color: ${({ theme }) => theme.colors.text1};
  text-decoration: none;

  &:active {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;

export const TagName = styled.span`
  color: ${({ theme }) => theme.colors.text1};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
