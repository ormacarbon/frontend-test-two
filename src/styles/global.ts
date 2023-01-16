import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      font-family: 'Roboto', sans-serif;
   }
   html {
      @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
      }
      
      @media (max-width: 720px) {
      font-size: 87.5%; // 14px
      }
   }

   body {
      background-color: ${props => props.theme.colors.backgroundColor};
      display: flex;
      justify-content: center;
      flex-direction: column;

      -webkit-font-smoothing: antialiased;

   }
`