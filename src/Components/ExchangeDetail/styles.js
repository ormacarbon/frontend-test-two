import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props=>props.theme.primaryBack};
    padding: 1rem;
    border-bottom: 1px solid ${props=>props.theme.borderColor} ;
    h2{
        color: ${props=>props.theme.text};
    }
`

export const ExchangeImage = styled.div`
    img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 100%;
    }
`

export const SocialMedia =  styled.div`
    .icon{
        font-size:2rem;
        color: ${props=>props.theme.primary};
        margin: 0 1rem 0 1rem;
        transition:300ms;
        :hover{
            transform: scale(1.1);
        }
    }
`

export const Info = styled.div`
    display: flex;
    color: ${props=>props.theme.text};
    .info-box{
        display: flex;
        align-items: center;
        margin: 0 1rem 0 1rem;
        .icon{
            font-size:2rem;
            color: ${props=>props.theme.primary};
        }
    }

`