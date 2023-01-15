import styled from "styled-components";

export const HighlightContainer = styled.div`
  background-color: ${ props => props.theme.colors.backgroundCard };
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem 2rem;

  @media (max-width: 1000px) {
    padding: 1rem;
  }

  > p {
    text-align: start;
    width: 100%;
  }

  > p:first-child {
    font-size: 1rem;
    font-weight: 500;
    color: ${ props => props.theme.colors.fontHighlights };
    text-align: start;

    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }

  > p:last-child {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${ props => props.theme.colors.fontHighlights };
    text-align: center;

    @media (max-width: 1000px) {
      font-size: 16px;
  }
`