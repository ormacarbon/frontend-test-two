import styled from "styled-components";

// FOOTER
export const FooterDiv = styled.footer `
    min-height: 150px;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color:${(props) => props.theme.colors.textColor};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

`