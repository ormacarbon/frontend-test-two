import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    list-style: none;
    text-decoration: none;
    color: var(--black);
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
    --white-200: #EFEFFF;
    --shadow: rgba(62, 100, 255, .45) 0px 25px 20px -20px;
    --shadow-hover: rgba(62, 100, 255, 0.25) 0px 13px 27px -5px, rgba(62, 100, 230, 0.3) 0px 8px 16px -8px;
    --shadow-news:  rgba(32, 70, 185, 0.1) 0px 20px 25px -5px, rgba(32, 70, 185, 0.04) 0px 10px 10px -5px;
  }
`;

export const Main = styled.div`
  margin: 2rem auto;
  max-width: 45rem;
  padding: 1.5rem;
  @media screen and (max-width: 500px) {
    margin: 1rem auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : "1rem")};
  color: var(--blue);
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  color: var(--black);
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  line-height: 1.5;
  & + p {
    margin-top: 1rem;
  }
`;
