import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-250);
  color: var(--brown-300);
  height: 100vh;

  font-family: var(--roboto);

  h1 {
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    padding: 100px 0 50px 0;
  }

  h3 {
    font-weight: 400;
    text-align: center;
    margin: 50px 0 100px 0;
  }

  button {
    text-transform: uppercase;
    display: block;
    margin: auto;
  }
`;
