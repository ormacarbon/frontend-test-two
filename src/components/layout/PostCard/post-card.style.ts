import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: ${({ theme }) => theme.radii.md};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
