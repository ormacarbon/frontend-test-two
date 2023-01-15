import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    max-width: 100vw;
    font-family: 'Inter', sans-serif;
`