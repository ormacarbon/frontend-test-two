import styled from "styled-components";

export const SessionHeading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
