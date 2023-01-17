import styled, { ThemeProvider } from "styled-components"
import { themeLightMode } from "../../theme/theme"

export default function Button(props) {
    return (
        <ThemeProvider theme={themeLightMode}>
            <StyledButton 
            onClick={props.onClick}
            style={{
                width: `${props.size}px`,
				margin: `${props.m}rem 0`
            }}
            >
                {props.text}
            </StyledButton>
        </ThemeProvider>
    )
}

const StyledButton = styled.button`
	color: ${p => p.theme.colors.secondaryColor};
	width: 300px;
	font-size: 1.3rem;
	padding: 0.3rem;
	background-color: transparent;
	border: 1px solid ${p => p.theme.colors.secondaryColor};
	border-radius: 5px;
	cursor: pointer;
	&:hover{
		border: 1px solid ${p => p.theme.colors.tertiaryColor};
		color: ${p => p.theme.colors.tertiaryColor};
	}

`