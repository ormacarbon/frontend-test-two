import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  :root {
    --black: #273053;
    --black-100: #3E4A79;
    --gray: #889297;
    --blue: #3E64FF;
    --blue-100: #597AFF;
    --white: #FFFFFF;
    --white-100: #F8F9FF;
    --shadow: 0px 18px 50px rgba(62, 100, 255, 0.1);
    --shadow-hover: rgba(62, 100, 255, .45) 0px 25px 20px -20px;
    --shadow-news: 0px 18px 20px rgba(62, 100, 255, 0.1);
  }
`;

export const Main = styled.div`
  margin: 2rem auto;
  max-width: 45rem;
  padding: 1.25rem;
  @media screen and (max-width: 500px) {
    margin: 1rem auto;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: var(--blue);
  @media screen and (max-width: 410px) {
    font-size: 1.8rem;
  }
`;
