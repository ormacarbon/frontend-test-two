import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  > h1 {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.fontPrimary};
    text-align: start;
    margin: 2rem 0 4rem 0;

    @media (max-width: 1000px) {
      margin: 1rem 0 2rem 0;
    }

    @media (max-width: 620px) {
      font-size: 14px;
      margin-top: 2rem;
    }
  }

  div {
    display: flex;
  }
`;

export const TodayHighlightsContainer = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 1000px) {
    padding: 0;
  }
`;