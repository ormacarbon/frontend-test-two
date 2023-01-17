import styled from "styled-components";

export const WeatherMainStyle = styled.div`
  height: 100vh;
  width: 100%;
`;

export const WeatherMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 2rem;

  @media (max-width: 620px) {
    align-items: center;
    padding: 0 1rem;
    justify-content: center;
    margin-top: 14rem;
    width: 100vw;
  }

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2rem 0 4rem 0;

    @media (max-width: 1000px) {
      margin: 1rem 0 2rem 0;
    }

    @media (max-width: 620px) {
      width: 100%;
    }
  }
`;

export const User = styled.p`
  background-color: transparent;
  color: ${ props => props.theme.colors.fontPrimary };
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  width: 100%;

  @media (max-width: 620px) {
    font-size: 14px;
  }
`

export const CardRender = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    padding: 0 2rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
    padding: 0;
    grid-gap: 0.5rem;
  }

  @media (max-width: 620px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    grid-gap: 0.5rem;
  }
`