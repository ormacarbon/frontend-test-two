import styled from "styled-components";

export const Title = styled.div`
        text-align: left;
       h1{
        margin: 2rem;
        font-size: 2rem;
        color: ${props=>props.theme.primary};
       }
       p{
        font-size: 1.2rem;
        margin:0 0 1rem 2rem;
        color:  ${props=>props.theme.desc};
       }
`