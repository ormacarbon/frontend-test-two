import styled from "styled-components";

export const BookStyle = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.textColorBlack};

    display: flex;
    flex-direction: column;
    gap: 100px;
    

    & > div{
        display: flex;
        flex-direction: column;
        gap: 20px;

        p{
            font-size: 20px;
            font-weight: 600;
            
        }
    }

    section{
        display: flex;
        flex-direction: row;
        gap: 100px;

        img{
            height: 400px;
            width: auto;
            object-fit: contain;
        }

        h1{
            font-size: 64px;
            font-weight: 700;
            
        }

        p{
            font-size: 24px;
            font-weight: 500;
            line-height: 36px;

            
        }

        & > div {
            display: flex;
            flex-direction: column;
            gap: 100px;
        }
    }

    @media (max-width: 920px) {
        section p{
            font-size: 18px;
        }
    }

    @media (max-width: 720px) {
        section{
            flex-direction: column;
        }

    }

    @media (max-width: 446px) {
        h1{
            font-size: 28px;
        }

        & > div p{
            font-size: 18px
        }

        section p{
            font-size: 16px;
        }
    }
`
