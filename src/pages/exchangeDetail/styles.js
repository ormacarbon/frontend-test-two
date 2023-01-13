import styled from "styled-components";

export const NewsContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    background-color: ${props=>props.theme.primaryBack};
    padding: 1rem;

    .error{
        font-size: 1.5rem;
        padding: 2rem;
        color:${props=>props.theme.text} ;
    }

`
export const NewsHeader =  styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 1rem;
`

export const NewsText = styled.div`
    padding: 2rem;
    label{
        color: ${props=>props.theme.text};
    }
    p{
        font-size: 1.2rem;
        color: ${props=>props.theme.desc};
        margin-top: 1rem;
    }

`