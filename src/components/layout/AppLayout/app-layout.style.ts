import styled from "styled-components";

export const AppContent = styled.main`
  height: 100%;
  overflow: hidden;
  grid-area: content;
`;

export const Container = styled.div`
  height: 100%;

  display: grid;

  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header  header"
    "sidebar content";
`;
