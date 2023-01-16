import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => `${props.backgroundColor}`};

    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 70px;

        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        padding: 15px;
    }


    img{
        width: 130px;
        height: auto;
        
    }

    nav > ul{
        display: flex;
        gap: 20px;


        a{
            text-decoration: none;
            color: ${props => props.theme.colors.textColorSecondary};
            font-size: 20px;
            font-weight: 500;
        }

        & > :hover{
            color: white;
        }
    }

    @media (max-width: 720px){
        
        li{
            font-size: 16px;
            font-weight: 600;
        }
        
    }

    @media (max-width: 420px){
        
        figure img{
            width: 90px;
        }

        li{
            font-size: 14px;
            font-weight: 600;
        }
        
    }   

`

