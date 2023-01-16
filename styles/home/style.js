import styled from "styled-components";

export const HomeStyle = styled.div`
    margin-bottom: 30px;

    & > section{
        background: linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%);
    }

    .container{
        display: flex;
        flex-direction: column;
        gap: 154px;
     
        & > div{
            display: flex;

            & > div{
                max-width: 540px;

                display: flex;
                flex-direction: column;
                gap: 114px;
            }

            figure img{
                min-height: 370px;
                max-height: 450px;

                height: 30vw;
            }
        }
    }

    h1{
        color:${props => props.theme.colors.textColorWhite};
        font-weight: 700;
        font-size: 64px;
        line-height: 80.32px;
    }

    main{
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
        padding: 15px;

        a{
            text-decoration: none;
        }

        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 49px;
            flex-wrap: wrap;

            h2{
                color:${props => props.theme.colors.textColorWhite};
            }
        }
            
    }

    @media (max-width: 920px) {
        .container > div img{
            display: none;
        }

        .container section{
            justify-content: center;
        }
    }

    @media (max-width: 720px) {
        h1{
            font-size: 56px;
        }

    }

    @media (max-width: 446px) {
        h1{
            font-size: 36px;
        }
    }

`
