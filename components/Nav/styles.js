import styled from 'styled-components'

import {default as a} from 'next/link'

export const Content = styled.nav`
    width: 100%;
    max-width: 500px;
    height: 10vh;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-attachment: white;
    border-bottom: 3px solid lightgray;
`;

export const Link = styled(a)`
    color: ${props => props.theme.mode == 'light' ? props.theme.colors.white : props.theme.colors.black};
    font-size: 1.14rem;
    cursor: pointer;

    > h1 {
        color: ${props => props.theme.mode == 'light' ? props.theme.colors.white : props.theme.colors.black};
        font-size: 1rem;
    }
`;