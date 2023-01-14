//? Styled
import styled from "styled-components";

export const DivCard = styled.div `

    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    border-radius: 1em;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    border-color: ${(props) => props.theme.colors.borderColor};
    background-color: ${(props) => props.theme.colors.cardBgColor};

    a {
    margin-top: 2em;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.textColor};
    text-transform: capitalize;
    letter-spacing: 0.1em;
    transition: all .2s ease-in;

    &:hover {
      color: ${(props) => props.theme.colors.lightGray};
    }
  }

    @media (max-width: 699px) {
        flex-direction: column;
    }

`


export const NameDiv = styled.div `
    text-align: center;
    
    h1 {
        margin-bottom: 2em;
        border-bottom: 1px solid #000;

    }

`

export const CharacterInfo = styled.div `
    margin-left: 1em;
    display: flex;
    flex-direction: row;
    padding: .4em;

    img {
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.borderColor};
        border-radius: 5px;
    }

    @media (max-width: 699px) {
        justify-content: center;
        align-items: center;
        margin-top: 1em;
        flex-direction: column;
    }
   
`

export const InfoContainer = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid ;
    border-color: ${(props) => props.theme.colors.borderColor};
    margin-left: 2em;
    margin-right: 2em;

    @media (max-width: 699px) {
        margin-top: 2em;
        margin-left: 0;
        border: none;
        border-top: 2px solid;
        border-color: ${(props) => props.theme.colors.borderColor};
        text-align: start;
    }


`

export const Info = styled.div `
    margin-left: 2em;
    margin-bottom: .5em;
    margin-top: 1em;
    color: ${(props) => props.theme.colors.textColor};

    @media (max-width: 699px) {
        margin-top: 2em;
    }


`

export const Title = styled.h4 `
    font-weight: bold;
`

export const InfoResult = styled.span `
    font-weight:500 ;
`

export const StatusBadge = styled.span `

    font-weight: bold;
    padding: .2em;
    border-radius: 4px;
    background-color: ${(props) => props.status === 'Alive' ? 'green' : "red"};

`