import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 5px;

	width: 100%;
`;

export const CardImage = styled.img`
	height: 60%;
	width: auto;
	margin: 10px 0;

	@media only screen and (min-width: 768px) {
		height: 300px;
		width: auto;
	}
`;

export const CardImagesContainer = styled.div`

	display: grid;
	grid-template-columns: 1fr;
	column-gap: 10px;
    padding: 20px;

	/* flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center; */

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: space-around;
		column-gap: 10px;
	}

	@media only screen and (min-width: 1024px){
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const CardContainer = styled.div`
	padding: 10px;
	box-shadow: 5px 5px ${(props) => props.theme.colors.cardShadow};

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 10px 0;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.colors.cardColor};
`;

export const PriceContainer = styled.button`
	padding: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border: 2px solid ${(props) => props.theme.colors.border};

	font-family: "Press Start 2P";
	width: 100%;
	overflow-wrap: break-word;
	color: ${(props) => props.theme.colors.textPrimary};
	background-color: transparent;
`;

export const CardTitle = styled.p`
	font-family: "Roboto";
	font-size: 12px;
	font-weight: 300;
	margin: 10px 0;
	text-align: center;
	color: ${(props) => props.theme.colors.textPrimary}
`;

export const PageButton = styled.button`
	border: 2px solid ${((props) => props.theme.colors.border)};
	padding: 10px;
	font-family: 'Press Start 2P';
	border-radius: 0;
	color: ${(props) => props.theme.colors.textPrimary};
	background-color: ${(props) => props.theme.colors.background};

	&:hover{
		transform: scale(1.05);
	}
`