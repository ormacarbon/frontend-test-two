import { createGlobalStyle } from "styled-components"
import TextField from '@mui/material/TextField'
import styled from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  button: "rgb(33, 33, 33)",
  select: "transparent",
  border: "rgb(33, 33, 33)"
}

export const darkTheme = {
  body: 'rgb(40, 49, 47)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#212121',
  svg: "white",
  button: "rgb(240, 185, 63)",
  select: "transparent",
  border: "rgb(240, 185, 63)",
  ul: "rgb(40, 49, 47)"
}

export const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Inter', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  a{
    color: ${({ theme }) => theme.text};
    svg{
    fill: ${({ theme }) => theme.svg};
    }
    span{
      color: ${({ theme }) => theme.text};
    }
  }

  button[type="submit"], button{
    background: ${({ theme }) => theme.button};
    border: none;
    color: ${({ theme }) => theme.body};
  }

  button[type="button"]{
    background: ${({ theme }) => theme.select};
    border: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }

  ul[role="listbox"]{
    background: ${({ theme }) => theme.ul};
  }

  h1, h2, h3, h4, h5, h6, label, strong, small, li{
    color: ${({ theme }) => theme.text};
  }
`

export const StyledTextField = styled(TextField)`
  background: ${({ theme }) => theme.body};
  & label.Mui-focused {
    color: ${({ theme }) => theme.text};
  }

  & input, label, p {
    color: ${({ theme }) => theme.text};
  }
`;