import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.bgSecondary};

    padding: 0 1.5rem;
    margin: 2rem 0 0 0;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 0.3rem;

  color: ${(props) => props.theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    font-size: 2rem;
    padding: 0 0.3rem;

    color: ${(props) => props.theme.colors.text};
  }
`;
