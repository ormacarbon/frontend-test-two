import styled from "styled-components";

export const HeaderMain = styled.header`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    background-color: #cf1928;
    height: 140px;
    @media (max-width: 700px) {
        width: 700px;
    }
    @media (max-width: 425px) {
        width: 700px;
    }
`
export const HeaderNav = styled.nav`
    display: flex;
    gap: 30px;
    @media (max-width: 700px) {
        width: 300px;
    }
`

export const DivImage = styled.div`
    align-self: center;
`

export const PModified = styled.p`
    cursor: pointer;
    font-size: large;
    font-family: 'Poppins', sans-serif;   
    @media (max-width: 740px) {
        font-size: small
    }
`