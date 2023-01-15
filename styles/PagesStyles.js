import styled from 'styled-components'

export const GlobalHomePage = styled.section`
display: flex;
flex-wrap: wrap;
justify-content:center;
background-color:${props => props.darkMode ? "#221f1f" : "white"};
gap:0.5rem;
min-height: 80vh;
`

export const GlobalPersonsPage = styled.section`
display: flex;
flex-wrap: wrap;
justify-content:center;
background-color:${props => props.darkMode ? "#221f1f" : "white"};
gap:0.5rem;
min-height: 80vh;
`

export const GlobalSeriesPage = styled.section`
display: flex;
flex-wrap: wrap;
justify-content:center;
background-color:${props => props.darkMode ? "#221f1f" : "white"};
gap:0.5rem;
min-height: 80vh;
` 

export const GlobalFooter = styled.section`
display: flex;
justify-content:center;
background-color: ${props => props.darkMode ? "#221f1f" : 'white'};
gap:1rem;
height: 12vh;
padding: 1rem;
`
