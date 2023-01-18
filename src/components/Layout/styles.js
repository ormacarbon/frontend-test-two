import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);

  main {
    width: 100%;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
