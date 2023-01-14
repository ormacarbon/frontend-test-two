import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const Nft = styled.div`
    width: 100%;
    max-width: 700px;
    margin: auto;
    h2{
        color: ${props=>props.theme.primary};
        font-size: 2rem;
        margin: 1rem 0 1rem 0;
    }
    #contract{
        color: ${props=>props.theme.desc};
        margin: 1rem 0 1rem 0;
        font-size: 0.9rem;
    }
    img{
        width: 200px;
        height: 200px;
        object-fit: contain;
    }
    #description{
        margin: 1rem 0 1rem 0;
        color:  ${props=>props.theme.text};
        text-align: justify;
    }

`
export const NftInfo = styled.div`
    width:100%;
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 2rem 0;

    .box{
        h3{
            color: ${props=>props.theme.primary}; ;
            margin: 1rem 0 1rem 0;
        }
        span{
            color: ${props=>props.theme.text}; ;
            font-weight: bold;
        }
    }
`