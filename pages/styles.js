import styled from "styled-components";

export const Content = styled.section`
    width: 100vw;
    height: 100vh;
`;

export const Box = styled.div`
    width: 100vw;
    height: 90%;
    max-width: 500px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-inline: 15px;
    > h1 {
        color: ${props => props.theme.mode == 'light' ? props.theme.colors.white : props.theme.colors.black};
        font-size: 1.75rem;
    }
`;
