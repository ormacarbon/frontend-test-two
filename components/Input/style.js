import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.input};
    padding: 5px 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const InputStyled = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 5px;
    font-size: 1.1rem;
    outline: none;
`