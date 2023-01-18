import styled from "styled-components"

export const Container = styled.div`

    margin-top: 4rem;

    .header_product{
        text-align: center;

        div{
            margin-top: 2rem;
        }

        h1{
            font-size: 24px;
            color: ${(props) => props.theme.fontColor}
        }

        img{
            max-width: 12rem;
            max-height: 12rem;
        }

        p{
            font-weight: bold;
            font-size: 18px;
            color: ${(props) => props.theme.fontColor};
            margin-top: 1rem;
            opacity: 0.6;

        }

    }

    .footer_product{
        margin: 1.5rem auto;
        line-height: 1.5em;
        max-width: 34rem;
        text-align: center;

        p{
            font-size: 16px;
            text-align: left;
            margin-bottom: 2rem;
            color: ${(props) => props.theme.fontColor};

        }

        a{
            color: ${(props) => props.theme.linkColor};
        }
    }






    @media (max-width: 768px){
        .footer_product{
            max-width: 34rem;
        }
    }




    @media (max-width: 688px) {

        margin-top: 5rem;
        padding: 0 3rem;

        .header_product{
            text-align: center;

            h1{
                margin: 0 auto;
                font-size: 18px;
                max-width: 22rem;
            }

            img{
                max-width: 10rem;
                max-height: 10rem;
            }
        }
    }



`;