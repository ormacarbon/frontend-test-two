//? Styled 
import styled from "styled-components";


export const DivButtons = styled.div `
    display: flex;
    padding: 1em;
    justify-content: center;
    align-items: center;
    max-width: 70%;

    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        background-color: ${(props) => props.theme.colors.carBgColor};
        border-radius: 0px 0px 10px 10px;
        max-width: 100%;
        
        @media (max-width: 699px) {
            font-size: 0.6em;
        }

        @media (max-width: 400px) {
            font-size: 0.5em;
        }

        @media (max-width: 300px) {
            max-width: 50%;
            font-size: 0.4em;
        }
        

        li {
            text-align: center;
            margin: .4em;
            background-color: ${(props) => props.theme.colors.backgroundColor};
            border: 2px solid;
            border-color: ${(props) => props.theme.colors.borderColor};
            width: 100%;
            cursor: pointer;
            padding: 1em;
            
            color: ${(props) => props.theme.colors.textColor};

            &:nth-child(1) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(2) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(3) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(4) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(5) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(6) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(7) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(8) {
                border-radius: 0px 0px 10px 10px;
            }
            &:nth-child(9) {
                border-radius: 0px 0px 10px 10px;
            }

           a {
            color: ${(props) => props.theme.colors.textColor};
            transition: all .2s ease-in;


            &:hover {
                color: #00ff00;
            }
           }
        }
    }
`