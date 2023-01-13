import styled from 'styled-components'

export const GlobalCard = styled.section `
background-color: black;
box-shadow: 0px 0.25rem 0.60rem 0 #E50914;
width: 25rem;
height: 14rem;
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
padding-top: 4vh;
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
padding-top: 0.5rem;
margin-top: 0.25rem;
color:white;
`
export const NoteArea = styled.div `
width: 100%;
height: 2rem;
display: flex;
flex-wrap: wrap;
gap: 0.5rem;
padding-top: 0.5rem;
margin-top: 0.25rem;
color:white;
`
export const ButtonArea = styled.div `
width: 100%;
height: 2rem;
display: flex;
justify-content: end;
gap: 0.5rem;
padding-top: 0.5rem;
margin-top: 0.25rem;
color:white;
`

export const AddListButton = styled.button `
color: #ffff;
font-weight: 700;
width: 50%;
border-radius: 0.25rem;
background-color: transparent;
border: 2px solid #E50914;
:hover {
cursor: pointer;
background-color: #E50914;
}
`

export const PosterArea = styled.div `
width: 50%;
height: 100%;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`
