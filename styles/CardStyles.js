import styled from 'styled-components'

export const GlobalCard = styled.section `
background-color: black;
box-shadow: 0px 0.25rem 0.60rem 0 #E50914;
width: 25rem;
height: 16rem;
margin: 0.5rem;
border-radius: 0.75rem;
display: flex;
`

export const MovieInfoArea = styled.div `
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 1rem;
padding-top: 1vh;
`

export const MovieName = styled.p `
font-family: 'Inter', sans-serif;
font-size: 1.5rem;
color: white;
font-weight: 700;
`

export const TypeArea = styled.div `
width: 100%;
height: 4rem;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
margin: 0.25rem 0;
color:white;
`
export const NoteArea = styled.div `
width: 100%;
height: 2rem;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
padding-top: 0.25rem;
color:white;
`
export const YearArea = styled.div `
width: 100%;
height: 2.5rem;
display: flex;
gap: 0.5rem;
padding-top: 0.5rem;
color:white;
`

export const Year = styled.p `
color: #ffff;
font-weight: 700;
font-size: 0.85rem;
`

export const PosterArea = styled.div `
width: 50%;
height: 100%;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`
