import styled from 'styled-components';

const layoutPartition = props => props.appTheme === 'light' ? '1px solid black' : '1px solid white';
const innerBorders = props => props.appTheme === 'light' ? '2px solid black' : '2px solid white';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
	font-size: large;
	color: ${props => props.appTheme === 'light' ? 'black' : 'white'};

	header, footer {
		position: fixed;
		width: 100vw;
		z-index: 1;
		background-color: ${props => props.appTheme === 'light' ? 'white' : 'black'};
		text-align: center;
	}

	header {
		top: 0;
		border-bottom: ${layoutPartition};
		padding-top: 20px;
	}

	footer {
		bottom: 0;
		border-top: ${layoutPartition};
		padding: 15px 0px 20px 0px;
	}

	header nav {
		margin: 40px 0px 20px;
		font-size: x-large;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25vh;
		margin-bottom: 8vh;
	}
`;

export const Button = styled.button`
	padding: 12px 20px 21px;
	margin-left: 10px;
	font-size: x-large;
	border: ${innerBorders};
	border-radius: 10px;
	background-color: transparent;
	cursor: pointer;
`;

export const PictureCardContainer = styled.div`
	border: ${innerBorders};
	margin-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	width: 90vw;

	section {
		position: relative;
  	object-fit: cover;
		overflow: hidden;
  	width: 300px;
  	height: 300px;
		border-radius: 100%;
		margin: 10px 30px;
	}

	@media screen and (min-width: 600px) {
		width: 500px;
	}
`;

export const PictureCardsGrid = styled.div`
	width: 95vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-top: 40px;
`;
