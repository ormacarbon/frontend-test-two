import styled, { css } from "styled-components";

export const QuerySection = styled.section`
	width: 100%;
	padding: 5rem 20px;
	background-color: ${(props) => props.theme.colors.danger};

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media only screen and (min-width: 768px) {
		width: 100%;
		padding: 5rem 20px;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		items: center;
	}
`;

export const QueryTextContainer = styled.div`
	margin: 3rem 0 0 0;
	width: 100%;

	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
	align-items: center;

	@media only screen and (min-width: 768px) {
		margin: 3rem 0 0 0;
		width: 40%;

		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-around;
		align-items: center;
	}
`;

export const QueryTitle = styled.h1`
	font-family: "Press Start 2P";
	font-size: 1.5rem;
	text-shadow: 5px 5px ${(props) => props.theme.colors.letters};
	margin: 0 0 20px 0;

	@media only screen and (min-width: 764px) {
		font-size: 2rem;
	}
`;

export const HorizontalLine = styled.div`
	height: 100%;
	border: 1px solid ${(props) => props.theme.colors.letters};
	filter: opacity(0.2);
	display: none;

	@media only screen and (min-width: 764px) {
		display: block;
	}
`;

export const QueryText = styled.p`
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.letters};
	font-family: "Roboto";
`;

export const CardImage = styled.img`
	box-shadow: 10px 10px ${(props) => props.theme.colors.primary};
`;

export const SearchMore = styled.button`
	border: 2px solid ${(props) => props.theme.colors.border};
	padding: 10px;
	font-family: "Press Start 2P";
	box-shadow: 5px 5px ${(props) => props.theme.colors.cardShadow};
	margin: 40px 0 10px 0;
	transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		transform: scale(1.1);
		transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
`;
