import styled from "styled-components";

export const ExchangeItems = styled.div`
        max-width: 300px;
        padding: 2rem;
        border-radius: 1rem;
        background-color: ${props=>props.theme.primaryBack};
        text-align: center;
        transition: 300ms;
        box-shadow: 10px 10px 76px -4px rgba(0,0,0,0.16);
        line-height: 2rem;
        :hover{
            transform: scale(1.1);
        }
        a{
            color: ${props=>props.theme.desc};
            line-height: 0.5rem;
            :hover{
                text-decoration: underline;
            }
        }
        h3{
            color: ${props=>props.theme.primary};
        }
`