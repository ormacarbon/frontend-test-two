import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: sans-serif;
  }

  .navbar{
    background-color: ${(props) => props.theme.primary};
    border-bottom: 0.4rem solid ${(props) => props.theme.secondary};
    margin-bottom: 3rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    
    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      font-weight: 700;
      font-size: 1.6rem;

      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    button{
      padding: 0.7rem;
      width: 50%;
      border-radius: 8px;
      font-weight: 700;
    }
  }
`;
