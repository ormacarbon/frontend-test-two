import styled from 'styled-components'

export const GlobalFilter = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 4vh;
    width: 20vw;
    height: 80vh;
    background-color: black;
    margin: 0.5rem;
    border-radius: 1rem;
`

export const FilterTitle = styled.p `
    color: white;
    margin-top:2vh;
`

export const FilterHeader = styled.section `
    display:flex;
    justify-content:center;
    height:15vh
`

export const FilterMain = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const InputSearch = styled.input `
    text-align: center;
    border-radius: 0.5rem;
    height: 4.5vh;
    background-color: transparent;
    box-shadow: 0.15rem 0.15rem 0.1rem #D9DDDC;
    width: 16vw;
    margin: 0 auto;
`

export const OrderTitle = styled.p `
    color: white;
    margin-top:6vh;
    height: 2.5rem;
    text-align: center;
`

export const InputSelect = styled.select `
    text-align: center;
    border-radius: 0.5rem;
    height: 4.5vh;
    background-color: transparent;
    color:white;
    box-shadow: 0.15rem 0.15rem 0.1rem #D9DDDC;
    width: 16vw;
    margin: 3vh auto;
`