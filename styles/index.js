import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
	font-size: large;
	color: ${props => props.appTheme === 'light' ? 'black' : 'white'};

	header {
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 1;
		background-color: ${props => props.appTheme === 'light' ? 'white' : 'black'};
		text-align: center;
		padding: 20px 0px;
		border-bottom: ${props => props.appTheme === 'light' ? '1px solid black' : '1px solid white'};
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		z-index: 1;
		background-color: ${props => props.appTheme === 'light' ? 'white' : 'black'};
		text-align: center;
		padding: 20px 0px;
		border-top: ${props => props.appTheme === 'light' ? '1px solid black' : '1px solid white'};
		padding-top: 8px;
	}

	header nav {
		margin: 20px 0px;
		font-size: x-large;

		a {
			margin-right: 20px;
			border: '2px solid red';
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20vh;
		margin-bottom: 5vh;
	}
`;

export const Button = styled.button`
	padding: 12px 20px 21px;
	margin-left: 10px;
	font-size: x-large;
	border: ${props => props.appTheme === 'light' ? '2px solid black' : '2px solid white'};
	border-radius: 10px;
	background-color: transparent;
	cursor: pointer;
`;

export const PictureCardContainer = styled.div`
	border: ${props => props.appTheme === 'light' ? '2px solid black' : '2px solid white'};
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;

	section {
		position: relative;
  	object-fit: cover;
		overflow: hidden;
  	width: 300px;
  	height: 300px;
		border-radius: 100%;
		margin: 10px 30px;
	}
`;
