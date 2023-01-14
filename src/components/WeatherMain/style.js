import styled from "styled-components";

export const WeatherMainStyle = styled.div`
  height: 100vh;
  width: 80%;
`;

export const WeatherMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 2rem;

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2rem 0 4rem 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${ props => props.theme.colors.fontPrimary };
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  outline: none;
`

export const CardRender = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  padding: 0 10rem;
`