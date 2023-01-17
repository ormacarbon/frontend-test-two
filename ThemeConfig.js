import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#23272f',
  text: '#FFF',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
   * {
    font-family:Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 0;
}
main{
    min-height: 100vh;
    width: auto;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`