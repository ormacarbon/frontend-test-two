import styled from "styled-components"


export const Container = styled.div`    
    input{
        opacity: 0;
        position: absolute;

        &:checked + label  div{
            transform: translateX(1.5rem)
        }
    }

    label{
        display: flex;
        position: relative;
        width: 3.125rem;
        height: 1.625rem;
        align-items: center;
        background-color: black;
        justify-content: space-between;
        border-radius: 50px;
        cursor: pointer;
        padding: 5px;
        transform: scale(1.5);

        div{
            background-color: white;
            border-radius: 50px;
            position: absolute;
            top: 2px;
            left: 2px;
            width: 1.375rem;
            height: 1.375rem;
            transform: translateX(0px);
            transition: transform 0.2s linear;
        }
    }

    svg{
        font-size: 16px;

        path{
            color: #f1c40f;
        }
    }
`;