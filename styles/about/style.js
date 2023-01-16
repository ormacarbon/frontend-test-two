import styled from "styled-components";

export const AboutStyle = styled.div`
    .section1{
        height: 694px;
        background: linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%);
        color: ${props => props.theme.colors.textColorWhite};
        padding: 10px;


        .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 60px;

            margin-top: 30px;
        }
        
        h1{
            font-size: 4rem;
            text-align: center;
        }

        p{
            max-width: 858px;
            font-size: 28px;
            text-align: center;
            font-weight: 400;
            line-height: 36.23px;
            
        }

        .vector{
            width: 105px;
            height: 5.5px;
            background-color:${props => props.theme.colors.textColorWhite};
        }
    }

    .section2{
        max-width: 90%;
        height: 694px;
        padding: 10px;
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        h2{
            max-width: 652px;
            font-size: 2rem;
            color: ${props => props.theme.colors.textColorBlack};
            margin-bottom: 30px;
        }
        
        p{
            font-size: 1.125rem;
            max-width: 638px;
            color: ${props => props.theme.colors.textColorBlack};
        }

        img{
            max-width: 500px;
            @media (max-width: 700px){
                width: 300px;
            }
        }
    }

    @media (max-width: 700px){
        .section1{
            h1{
                font-size: 3rem;
            }

            p{
                font-size: 20px;
            }
        }

        .section2{
            h2{
                font-size: 1.5rem;
            }
        }

    }
`