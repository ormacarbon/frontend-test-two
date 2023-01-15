import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.input};

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

export const LeftIconContainer = styled.button`
    background-color: transparent;
    border: none;
    height: 100%;
    padding: 20px;
    border-radius: 10px 0 0 10px;

    &:hover{
        background-color: ${(props) => props.theme.colors.darker + 10};
    }
    &:active{
        background-color: ${(props) => props.theme.colors.darker + 30};
    }
`