import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Box = styled.div`
    width: 100%;
    height: 90%;
    max-width: 700px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CardCharacter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.mode == 'light' ? props.theme.colors.white : props.theme.colors.black};
    > img {
        :hover {
            width: 275px;
            height: 380px;
        }
    }
    > h2 {
        margin-top: 15px;
    }
`;

export const PokemonStatBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 75px;
    > div {
        display: flex;
        align-items: center;
    }
    img {
        margin-left: 5px;
    }
`;

export const BoxEvolvesTo = styled.div`
    width: 90%;
    padding-inline: 5%;
    display: block;
    justify-content: space-between;
    > div {
        display: flex;
        align-items: center;
        margin-top: 5px;
        > h4 {
            margin-right: 5px;
        }
    }
    img {
        margin-left: 5px;
    }
`;

export const PokemonSkills = styled.div`
    color: ${props => props.theme.colors.white};
    width: 100%;
    padding-inline: 5%;
    margin-bottom: 15px;
`;

export const BoxSkill = styled.div`
    background: linear-gradient(90deg, rgba(104,41,249,1) 0%, rgba(125,78,233,1) 35%, rgba(128,84,231,1) 67%, rgba(149,109,240,1) 100%);
    border-radius: 5px;
    padding: 5px;
    margin-top: 15px;
    > h3 {
        margin-bottom: 10px;
    }
`;

export const Skill = styled.div`
    > p {
        margin-bottom: 5px;
    }
    > div {
        margin-bottom: 15px;
        display: flex;
        border-bottom: 2px solid white;
        > img {
            margin-left: 5px;
        }
    }
`;