import styled from "styled-components";


export const Container = styled.div`
     border: 0.1px solid #B2B2B2;
     border-radius: 10px;
     max-width: 12rem;
     display: flex;
     justify-content: center;
     padding: 0.6rem;
     flex: 1 1 12rem;
     margin: 10px 10px;

    img{
        text-align: center;
        max-width: 10rem;
    }

    div{

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
                margin: 0.5rem 0;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }
           
        }

        p{
                opacity: 0.8;
        }

        &#div_see_more {
                margin-top: 0.8rem;
                width: 100%;
                padding-top: 0.5rem;
                border-top: 0.1px solid #B2B2B2;
                text-align: center;

                a{                
                    margin-top: 4rem;
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
            }
        }   
`;