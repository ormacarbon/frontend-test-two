import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	padding: 20px;
	position: absolute;
	background-color: transparent;
	
`;

export const ToggleButton = styled.div`
	margin: 0;
	right: 30px;
	position: fixed;
	background-color: transparent;
	border: 0;
	z-index: 10;
	color: ${(props) => props.theme.colors.darker};
	border: 1px solid white;
`;

export const ContentContainer = styled.div`

	position: fixed;
	width: 0;
	height: 0;
	padding: 20px;

	backdrop-filter: blur(10px) brightness(0.3);
	right: 50px;
	border-radius: 40px;
	display: none;
	z-index: 9;

	${(props) =>
		props.toggle &&
		css`
			min-width: 100vw;
			min-height: 100vh;
			border-radius: 0;
			top: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
		`}
		
`;

export const MenuItems = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Item = styled.li`
    list-style: none;
    font-weight: 600;
    font-size: 20px;
    margin: 10px auto;
    padding: 20px;
    text-align: center;
    color: ${(props) => props.theme.colors.letters};

    &:hover{
        background-color: ${(props) => props.theme.colors.background + '40'};
    }
	font-family: 'Press Start 2P';
`

export const BrandContainer = styled.div`
    width: 100%;
    height: 50%;

    text-align: center;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const Brand = styled.h2`
    font-size: 1rem;
    font-weight: 700;
	color: ${(props) => props.theme.colors.letters};
	text-shadow: 2px ${(props) => props.theme.colors.neutral};
	font-family: 'Press Start 2P';
`
export const ThemeToggleButton = styled.button`
	border: 2px solid ${((props)=>props.theme.colors.border)};
	padding: 10px;
	box-shadow: 5px 5px ${((props)=>props.theme.colors.primary)};
	font-family: 'Press Start 2P';
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.textPrimary}
`