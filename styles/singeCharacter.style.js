import styled from "styled-components";


export const DivCard = styled.div `

    display: flex;
    flex-direction: row;
    padding: 1em;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-radius: 1em;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    border-color: ${(props) => props.theme.colors.borderColor};
    background-color: ${(props) => props.theme.colors.cardBgColor};

    @media (max-width: 699px) {
        flex-direction: column;
    }

`


export const ImageDiv = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    


    h1 {
        margin-bottom: .5em;

    }

    img {

        border: 1px solid #000;
        border-radius: 5px;
    }
`

export const CharacterInfo = styled.div `
    margin-left: 1em;
    border-left: 2px solid #000;
    display: flex;
    flex-direction: column;
    padding: .4em;

    @media (max-width: 699px) {
        border-left: 0;
        border-top: 2px solid #000;
        margin-left: 0;
        margin-top: 1em;
    }
   
`

export const Info = styled.div `

    margin-bottom: .5em;

    span {
        font-weight: 500;
    }

`