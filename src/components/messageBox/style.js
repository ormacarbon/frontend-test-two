import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    margin: 4rem auto;
    justify-content: center;
    align-items: center;
    width: 22rem;
    height: 5rem;
    color: ${(props) => props.theme.fontColor};
    background-color:#b0fbf1;
    background-color: ${(props) => props.mode === "ligth" ? "#b0fbf1" : "#1A283D"};
    border-radius: 3px;
    border: 0.01px solid #65EEC1;

    p{
        color: ${(props) => props.mode === "ligth" ? "#09c7ac" : "#8CADC7"};
        font-size: 18px;
        margin-left: 0.4rem;
    }

    svg{
        color: ${(props) => props.mode === "ligth" ? "#09c7ac" : "#8CADC7"};
        font-size: 18px
    }

`;