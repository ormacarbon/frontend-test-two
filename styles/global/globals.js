import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap');

  body,div,ul,li,header,main,nav,div,section,figure,figcaption,img,input,button,form,label,p,a,select,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  textarea:focus, input:focus, select:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  @media (min-width: 720px){
    html{
      font-size: 21.5px;
    }
  }

  body{
    background-color: ${props => props.theme.colors.backgroundColorBody};
  }

  .container{
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
  }



`;

export default GlobalStyle;