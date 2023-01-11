import styled from "styled-components";

export const CoinDetail = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
   
`
export const AboutContainer = styled.div`
    background-color: ${props=>props.theme.primaryBack};
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 3rem;
    .box{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid${props=>props.theme.borderColor};
        margin-bottom: 1rem;
        p{
            color: ${props=>props.theme.primary};
            font-size: 1.4rem;
            font-weight: bold;
        }
        .back{
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.4rem;
            color: ${props=>props.theme.primary};
            :hover{
                text-decoration: underline;
            }
        }
    }

       .text{
            color: ${props=>props.theme.desc};
            letter-spacing: 0.2rem;
            text-align: justify;
            line-height: 1.5rem;
       }
`