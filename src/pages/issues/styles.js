import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.bg};
  padding-top: 60px;
  width: 100%;
  color: ${(p) => p.theme.colors.primary};
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-width: 600px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const IssuesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
