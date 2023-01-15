import styled, { css } from "styled-components";

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
	flex-wrap: wrap;


	width: 100%;

	${(props) => props.variant == 'search' && css`
		background-color: ${(props) => props.theme.colors.background};
	`}

`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	height: 100%;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: Row;
	justify-content: space-around;
    align-items: center;
	flex-wrap: wrap;


	width: 100%;
	height: 90vh;
	background-color: black;
	padding: 20px;
	background-image: url("/images/pokemonWallpaper.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
`;

export const HeaderTitleContainer = styled.div`
	border: 1px solid ${(props) => props.theme.colors.neutral};
	padding: 20px;
    backdrop-filter: blur(10px);
	color: ${(props) => props.theme.colors.letters};
	box-shadow: 10px 10px 0px ${(props) => props.theme.colors.danger};
    margin: 50px 0;
	text-align: center;
	width: 80%;
`;
export const HeaderTitle = styled.h1`
	font-weight: 700;
	font-size: 2rem;
	margin: 20px 0;
    font-family: 'Roboto';
`;
export const HeaderTitleOrma = styled.h1`
	font-weight: 700;
	font-size: 1.5rem;
	margin: 20px 0;
	text-shadow: 10px 5px 0px ${(props) => props.theme.colors.neutral};
    font-family: 'Press Start 2P';
`;

export const HeaderText = styled.p`
	font-size: 1.2rem;
	font-family: "Roboto";
	margin: 5px 0;
	text-align: center;
`;

export const CheckOut = styled.button`
    border: 3px solid ${(props) => props.theme.colors.letters};
    padding: 15px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.letters};
    font-size: 22px;
    font-family: 'Press Start 2P';
    transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 50%;
    &:hover{
        transform: translateY(5px);
        transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    margin: 20px 0;
    box-shadow: 5px 5px ${(props) => props.theme.colors.primary};
`

export const OrmaText = styled.p`
    color: ${(props) => props.theme.colors.letters};
    margin: 30px 0;
`

export const SearchTip = styled.p`
    font-size: .8rem;
    margin: 20px 0;
	padding: 20px;
	color: ${(props) => props.theme.colors.textPrimary}
`

export const QuerySection = styled.section`
	width: 100%;
	padding: 5rem 20px;
	background-color: ${(props) => props.theme.colors.danger};

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`

export const QueryTextContainer = styled.div`
	margin: 3rem 0 0 0;
	width: 100%;

	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
	align-items: center;
`

export const QueryTitle = styled.h1`
	font-family: 'Press Start 2P';
	font-size: 1rem;
	text-shadow: 5px 5px ${(props) => props.theme.colors.letters};

	@media only screen and (min-width: 764px){
		font-size: 2rem;
	}
`

export const HorizontalLine = styled.div`
	height: 100%;
	border: 1px solid ${(props) => props.theme.colors.letters};
	filter: opacity(.2);
`

export const QueryText = styled.p`
    font-size: .8rem;
    margin: 20px 0;
	padding: 20px;
	color: ${(props) => props.theme.colors.letters};
`

export const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
    display: none;
    margin: 10px 0 0 0 ;
    ${(props) => !(props.isValid )&& css`
        display: block;
    `}
`

export const PhoneImageContainer = styled.div`

	box-shadow: 5px 5px ${(props) => props.theme.colors.primary};
`