import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const CategoriesContainer = styled.span`
  margin-top: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
