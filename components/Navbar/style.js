import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	padding: 20px;
	position: fixed;
	background-color: transparent;
`;

export const ToggleButton = styled.button`
	width: 20px;
	height: 20px;
	margin: 0;
	right: 50px;
	position: fixed;
	background-color: transparent;
	border: 0;
	z-index: 10;
`;

export const ContentContainer = styled.div`

	position: fixed;
	width: 0;
	height: 0;
	padding: 20px;
	background-color: ${(props) => props.theme.colors.primary};
	right: 50px;
	border-radius: 40px;
	display: none;

	${(props) =>
		props.toggle &&
		css`
			width: 100vw;
			height: 100vh;
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
    margin: 10px 0;
    padding: 20px;
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.letters};

    &:hover{
        background-color: ${(props) => props.theme.colors.background + '40'};
    }
`
