import styled from "styled-components";

export const SwitchContainer = styled.div`
    width: 100%;
    max-width: 50px;
    height: 30px;
    background: ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.gray};
    position: relative;
    margin-top: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 0.24rem;

    /* Add pseudo element */
    /* &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    } */
`


export const ToggleButton = styled.label`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.theme.secondary};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: all 200ms ease-in-out;
    cursor: pointer;

`

export const Input = styled.input`
    opacity: 0;
    width: 100%;
    max-width: 50px;
    height: 30px;
    z-index: 1;
    cursor: pointer;
    
    &:checked + ${ToggleButton} {
        transform: translateX(30px);
    }
`
