import styled from "styled-components";


export const Container = styled.div`
     display: flex;
     justify-content: center;
     flex: 1 1 6rem;
     border: 0.1px solid #B2B2B2;
     border-radius: 10px;
     max-width: 12rem;
     padding: 0.6rem;
     margin: 10px 10px;

    img{
        text-align: center;
        max-width: 10rem;
    }

    div{
        text-align: center;
        max-width: 100%;

        &:hover{
            &#product_name{
                text-decoration: underline;
            }
        }

        a{

            &#product_name{
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2; /* number of lines to show */
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                text-align: left;
                line-height: 1.5em;
                min-height: 3rem;
                margin: 0.5rem 0;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            } 
        }

        p{
                margin-top: 0.8rem;
                text-align: left;
                opacity: 0.8;
        }

        &#div_see_more {
                width: 100%;
                margin-top: 0.8rem;
                padding-top: 0.5rem;
                border-top: 0.1px solid #B2B2B2;
                justify-content: center;

                a{                
                    text-decoration: none;
                    opacity: 0.8;
                }
        }
    }


    @media (max-width: 768px) {

        max-width: 9rem;
            div{
                img{
                    max-width: 5rem;
                }

                a{
                    font-size: 12px;
                    max-width: 7rem;
                }
            }
        }   
`;