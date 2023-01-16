import styled, { createGlobalStyle } from "styled-components";

import Link from "next/link";

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

    body, input, button{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
  }
`;

// This content will repeat for movies, series and tv shows pages
export const MainContent = styled.main`
  margin-top: 2rem;
  padding: 2rem;
  height: 80vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  grid-template-areas:
    "main main aside"
    "main main aside"
    "main main aside";
`;

// Global style to Link
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};

  &:hover {
    color: ${(props) => props.theme.colors["gray-300"]};
    transition: 0.2s;
  }
`;
