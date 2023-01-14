import styled from "styled-components";

export const SkeletonContainer = styled.div`
  & rect {
    fill: ${({ theme }) => theme.colors.background2} !important;
  }
`;
