//? Styled 
import styled from "styled-components";

// Container style
export const MainContainer = styled.div `
    min-height: 80vh;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 2em;
    color:${(props) => props.theme.colors.textColor} ;

`