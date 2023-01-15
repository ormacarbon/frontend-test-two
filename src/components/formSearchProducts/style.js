import styled from "styled-components";


export const Container = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    
    div{
        
        h1{
        color: black;
        font-size: 36px;
        text-align: center;
        }

        div{
            display: flex;
            width: 22rem;
            height: 2.5rem;
            margin-top: 0.6rem;
            border-radius: 70px;
            border: 0.5px solid #000;
            align-items: center;
            padding: 0.8rem;

            input{
                width: 20rem;
                height: 1rem;
                padding: 3px;
                font-size: 14px;
                outline: none;
                border: none;                
            }
        }
    }

`;