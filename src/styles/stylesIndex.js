import styled from "styled-components"

export const DivCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
    border: 1px solid black;
    border-radius: 12px;
    padding: 10px;
    width: 1240px;
    margin: 0 auto;
    min-height: 460px;
    @media (max-width: 1240px) {
        width: 800px;
    }
    @media (max-width: 800px) {
        width: 400px;
    }
    @media (max-width: 700px) {
        width: 400px;
        margin-left: 150px;
    }
    @media (max-width: 425px) {
        width: 375px;
        margin-left: 150px;
    }
`

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

