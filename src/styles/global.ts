import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
      background-image: radial-gradient(circle at 120.71% 50%, #4a3e5f 0, #2d244c 15%, #0a0737 50%, #000025 85%, #000018 100%);
    
      font: 400 16px 'Inter', sans-serif;
      color: ${(props) => props.theme.colors.white};
    }

    a{
      text-decoration: none;
    }
`;
