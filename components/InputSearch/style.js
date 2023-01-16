import styled from "styled-components";

export const FormSearch = styled.div`
    height: 60px;
    max-width: 443px;
    background-color: white;
    border: 2px solid ${props => props.theme.colors.grey20};
    border-radius: 8px;
    padding: 0 10px 0 15px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div{
        width: 100%;

        display: flex;
        align-items: center;
        gap: 10px;
        
        input{
            width: 80%;

            font-size: 16px;
            font-weight: 600;

            & ::placeholder {
                color: ${props => props.theme.colors.textColorSecondary};
            }
        }

    }

    transition: 0.5s;

    & :hover {

        input::placeholder {
            color: ${props => props.theme.colors.grey50};
        }
    }

    button{
        height: 44px;
        padding-inline: 15px;
        background-color: #3858D6;
        color: white;
        border-radius: 9px;
        
        font-size: 18px;
        font-weight: 600;
    }
`;