import styled from "styled-components";

export const CardStyle = styled.li`
    width: 270px;
    max-height: 440px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &:hover{
        img{
            scale: 1.1;
        }
    }
            
    figure{
        height: 337px;
        width: 100%;
        background-color: ${props => props.theme.colors.backgroundColorCard};
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;


    }

    img{
        height: 280px;
        max-width: 190px;

        object-fit: contain;
        transition: 0.5s;

        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    }

    div{
        text-align: center;
    }

    h4{
        color: ${props => props.theme.colors.textColorBlack};
        font-weight: 600;
        font-size: 20px;
        line-height: 36px;

        max-height: 35.99px;
        margin-inline: 15px;

        max-width: 28ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p{
        color: ${props => props.theme.colors.textColorSecondary};
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-inline: 15px;

        max-width: 25ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`