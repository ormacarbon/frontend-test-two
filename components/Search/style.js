//? Styled
import styled from "styled-components";


export const FormContainer = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    margin-bottom: 2em;
    
    input {
        outline: none;
        border: 2px solid;
        padding: 1em;
        border-radius: 0px 0px 0px 10px;
        border-color: transparent;
        background-color: ${(props) => props.theme.colors.backgroundColor};
        transition: all .2s ease-in;
        color: ${(props) => props.theme.colors.inputColor};
        letter-spacing: 0.1em;

        &::placeholder {
            color: ${(props) => props.theme.colors.textColor};
        }

        &:focus {
            border-color: ${(props) => props.theme.colors.borderColor};
        }

        @media (max-width: 400px) {
            max-width: 40%;
        }
    }

    input[type="submit"] {
        border-radius: 0px 10px 0px 0px;
        color: ${(props) => props.theme.colors.textColor};
        border-color: transparent;
        cursor: pointer;        

        &:hover {
            background-color: ${(props) => props.theme.colors.borderColor};
        }
    }

    
`