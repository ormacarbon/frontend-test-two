import styled from "styled-components";


export const TickerContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    background-color: ${props=>props.theme.primaryBack};
    padding: 1rem;
`
export const Tickers = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: ${props=>props.theme.background};
    border-radius: 1rem;
    ul{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin: 1rem;
        border: 1px solid${props=>props.theme.primaryBack};
        background-color: ${props=>props.theme.primaryBack};
        padding: 1rem;
    }
    ul li{
        color: ${props=>props.theme.text};
    }
    ul li a{
        color: ${props=>props.theme.primary};
        text-decoration: underline;
    }

    @media(max-width:470px){
        ul{
            flex-direction: column;
        }
    }
`

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
export const HeaderContainer =  styled.div`
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