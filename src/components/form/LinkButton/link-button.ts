import Link from "next/link";
import styled from "styled-components";

export const LinkButtonContainer = styled(Link)`
  all: unset;
  height: 1.6rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;
