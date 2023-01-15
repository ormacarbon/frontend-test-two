import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	padding: 10px;
	background-color: ${(props) => props.theme.colors.neutral};
	width: 100vw;
	align-self: flex-end;
	height: 200px;

	@media only screen and (min-width: 764px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		padding: 10px;
		background-color: ${(props) => props.theme.colors.neutral};
		width: 100vw;
		align-self: flex-end;
		height: 200px;
	}
`;

export const Brand = styled.h2`
	font-family: "Press Start 2P";
	font-size: 1.5rem;
	text-shadow: 5px 5px ${(props) => props.theme.colors.danger};
	color: ${(props) => props.theme.colors.letters};
	margin: 30px;
`;

export const Line = styled.div`
	width: 100%;
	border: 1px solid ${(props) => props.theme.colors.border};
	margin: 10px 0;
	filter: opacity(0.3);

	@media only screen and (min-width: 764px) {
		height: 100%;
		border: 1px solid ${(props) => props.theme.colors.border};
		margin: 10px 0;
		filter: opacity(0.3);
		width: 1px;
	}
`;

export const SocialsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 5px;
	color: #ffffff;
	font-size: 3rem;
	width: 100%;

	@media only screen and (min-width: 764px) {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 5px;
		color: #ffffff;
		font-size: 3rem;
		width: 20%;
	}
`;

export const SocialSingleContainer = styled.div`
	a {
		text-decoration: none;
	}
	color: ${(props) => props.theme.colors.letters};
	&:hover {
		transform: translateX(5px);
        transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

    transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
