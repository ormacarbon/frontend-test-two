import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme[100]};
    color: #fff;
  }

  a{
    text-decoration: none;
    color: #fff;
  }
`;
