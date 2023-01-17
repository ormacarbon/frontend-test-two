import styled from "styled-components";


export const Container = styled.div`
    display: flex;

    .container_className{
        display: flex;
        list-style: none;
        margin: 1rem auto;

        li{
            margin: 0 0.4rem;
            background-color: #2E8CA3;
           /// border: 1px solid #1F6B88;
            border-radius: 10px;
            box-shadow: 1px 1px 2px black;
            padding: 0.6rem 0.8rem;


            a{
                color: white;
                font-weight: bold;
                width: 100%;

                &:hover{
                    cursor: pointer;
                }
            }

            &.selected{
                background-color: white;
                -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
                -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
                box-shadow: inset 0px 0px 5px #c1c1c1;
                a{
                    color: black;
                }
            }
        }
    }

    .activeLinkClassName{
        color: white;
    }	
`;