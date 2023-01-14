import styled from "styled-components";

export const NftsContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
    background-color: ${props=>props.theme.primaryBack};
`
export const Text = styled.h3`
    color: ${props=>props.theme.primary};
    margin: 0 0 2rem 2rem;
`

export const NftItem = styled.div`
    ul{
        display: flex;
        gap: 2rem;
        margin: 1rem;
        padding: 1rem;
        background-color: ${props=>props.theme.background};
        color: ${props=>props.theme.text};
        border-radius: 1rem;
        transition: 300ms;
        :hover{
            transform: scale(1.07);
            background-color:  ${props=>props.theme.primaryBack};
            border: 1px solid  ${props=>props.theme.borderColor};
        }
    }
    @media(max-width:600px){
        ul{
            flex-direction: column;
            overflow-x: scroll;
        }
    }
`
