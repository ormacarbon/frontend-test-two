import styled from "styled-components";

export const PostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media screen and (min-width: 800px) {
    gap: 3.5rem;
  }
`;
